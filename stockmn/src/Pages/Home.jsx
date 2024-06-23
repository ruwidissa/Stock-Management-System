import React, { useRef, useEffect, useState } from "react";
import { Link, Route, useNavigate } from 'react-router-dom';
import {Table, Popconfirm, Input, Space} from 'antd'
import axios from 'axios'  // Importing axios for making HTTP requests
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import * as XLSX from 'xlsx';   // Importing XLSX for Excel export
import jsPDF from 'jspdf';  // Importing jsPDF for PDF export
import 'jspdf-autotable';  // Importing jsPDF auto table for table in PDF
import { ExportOutlined,FilePdfOutlined  } from '@ant-design/icons';
import "./Home.css"
import { MenuFoldOutlined, MenuUnfoldOutlined, GoogleOutlined, ProjectOutlined, DashboardOutlined} from '@ant-design/icons';
import { Button,message, Layout, Menu, theme } from 'antd';


  const { Header, Sider, Content, Footer} = Layout;
  const { Search } = Input;
function Home() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);  // Function to handle search
const BackendURL = 'http://localhost:8080/api/user/getData';
const BackendURLDelete = 'http://localhost:8080/api/user/deleteData';

// Function to confirm item deletion
const confirm = (e) => {
  console.log(e);
  message.success('Item Deleted');
};

// Function to get column search props
const getColumnSearchProps = (dataIndex) => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
    <div
      style={{
        padding: 8,
        width: 330,
      }}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <Input
        ref={searchInput}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        style={{
          marginBottom: 8,
          display: 'block',
        }}
      />
      
      <Space style={{ display: 'flex', justifyContent: 'Right', gap: '5px', height: 40 }}> 
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{
            width: 90,
            display: 'block',
            margin: '0 auto',
          }}
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(clearFilters)}
          size="small"
          style={{
            width: 90,
          }}
        >
          Reset
        </Button>
        
        <Button
          type="link"
          size="small"
          onClick={() => {
            close();
          }}
        >
          close
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered) => (
    <SearchOutlined
      style={{
        color: filtered ? '#1677ff' : '#f0f7f7',
      }}
    />
  ),
  onFilter: (value, record) =>
    record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  onFilterDropdownOpenChange: (visible) => {
    if (visible) {
      setTimeout(() => searchInput.current?.select(), 100);
    }
  },
  render: (text) =>
    searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{
          backgroundColor: '#ffc069',
          padding: 0,
        }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    ),
});
  // Function to handle Excel export
const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(dataSource);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, 'Report.xlsx');
};
 // Function to handle PDF export
const exportToPDF = () => {
  const doc = new jsPDF();
  const tableColumn = columns.map(col => col.title);
  const tableRows = dataSource.map(record => columns.map(col => record[col.dataIndex]));
  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
  });

  doc.save('Report.pdf');
};

const [columns, setColumns] = useState([
{
    title: "Product ID",
    dataIndex: "product_id",
    width: '15%',
    key: "product_id",
    ...getColumnSearchProps('product_id'),
},
{
 title: "Product Name",
 dataIndex: "product_name" ,
 width: '17%',
 key: "product_name",
    ...getColumnSearchProps('product_name'),
},
{
  title: "On Hand Qty",
  dataIndex: "quantity"
},
{
  title: "Vendor",
  dataIndex: "vendor_name",
  key: "vendor_name",
    ...getColumnSearchProps('vendor_name'),
},
{
  title: "Buying Price",
  dataIndex: "buying_price"
},
{
  title: "Product Category",
  dataIndex: "material_name",
  key: "material_name",
    ...getColumnSearchProps('material_name'),
},
{
  title: "Selling Price",
  dataIndex: "selling_price"
},
{
  title: 'Action',
  dataIndex: '',
    key: 'x',
  render: (_,record) => (
      <>
      <Popconfirm title="Delete Item?" description="Are you sure to delete this item?" onConfirm={() => {handleDelete(record.product_id); confirm(record.product_id) } }>
            <a>Delete</a>
          </Popconfirm>
      <a onClick={() => updateInfo(record.product_id)}> Update</a>
      </>
  ),
}

]);

const handleMenuClick = (e) => {
  if (e.key === '3') {
    window.location.href = 'https://www.google.com';
    
  }
  if (e.key === '2'){
    window.location.href = '/generatereport';
  }
if (e.key === '1'){
  window.location.href = '/home';
}
};

const onButtonClick = (e) => {
  window.location.href = '/addproduct';
}


const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

const navigate = useNavigate();
const updateInfo = (product_id) => {
navigate(`/update/${product_id}`);    // Navigate to update page with product_id
console.log('product Id sent')
};

  // Function to handle deletion of product
const handleDelete = async (product_id) => {
  console.log('Attempting to delete product with ID:', product_id);
  try {
    const response = await axios.delete(`http://localhost:8080/api/user/deleteData`, {
      data: { product_id }});
    console.log('Product deleted successfully:', response.data);
     setDataSource(prevData => prevData.filter(item => item.product_id !== product_id));
     console.log('deleted successfully')
  } catch (error) {
    console.error('Error deleting product:', error);

  }
};

  // State to store data source and loading status
const [dataSource, setDataSource] = useState([]);
const [loading, setLoading] = useState(true);

 // useEffect hook to fetch data on component mount
useEffect(() => {
  const fetchData = async () => {
      try {
          const response = await fetch(BackendURL);
          const result = await response.json();
          setDataSource(result);
          setLoading(false);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  fetchData();
}, []);
const [collapsed, setCollapsed] = useState(true);
const {token: { colorBgContainer, borderRadiusLG },} = theme.useToken();  // Accessing theme tokens for styling

return(
<div>

<header className="hader">Stock Management System</header>
<Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={handleMenuClick}
          items={[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <ProjectOutlined />,
              label: 'Generate Report',
            },
            {
              key: '3',
              icon: <GoogleOutlined />,
              label: 'Google Search',
              
            },
          ]}
        />
      </Sider>
      <Layout className="layout">
      
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button className="button"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

          <Button className="new-button" type='primary' onClick={onButtonClick} > New </Button>
          <Button
        type="primary"
        className="export-button-excel"
        icon={<ExportOutlined />}
        onClick={exportToExcel}> 
        Export to Excel
      </Button>

      <Button
        type="primary"
        className="export-button-pdf"
        icon={<FilePdfOutlined />}
        onClick={exportToPDF}
      >
        Export to PDF
      </Button>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }} 
        >
          <Table loading={loading} columns={columns} rowKey="product_id" dataSource={dataSource} scroll={{y:420}} className="custom-table-header" ></Table>

        </Content>
        <Footer style={{ textAlign: 'center' }}>
          
          Ruwin ©{new Date().getFullYear()} Created by Ruwin Dissanayake
        </Footer>
      </Layout>
    </Layout>
</div>  
);
}

export default Home;