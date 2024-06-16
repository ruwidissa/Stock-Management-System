import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import {Input} from 'antd'
import {Table} from 'antd'

import "./All.css"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    GoogleOutlined,
    ProjectOutlined,
    DashboardOutlined
  } from '@ant-design/icons';
  import { Button, Layout, Menu, theme } from 'antd';
  const { Header, Sider, Content, Footer} = Layout;
  const { Search } = Input;
function Hom() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
const BackendURL = 'http://localhost:8080/api/user/getData';
const [columns, setColumns] = useState([
{
    title: "Product ID",
    dataIndex: "product_id",
    width: '15%'
},
{
 title: "Product Name",
 dataIndex: "product_name" ,
 width: '17%'
},
{
  title: "On Hand Qty",
  dataIndex: "quantity"
},
{
  title: "Vendor",
  dataIndex: "vendor_name"
},
{
  title: "Buying Price",
  dataIndex: "buying_price"
},
{
  title: "Product Category",
  dataIndex: "material_name"
},
{
  title: "Selling Price",
  dataIndex: "selling_price"
},
{
  title: 'Action',
  dataIndex: '',
  key: 'x',
  render: () => <a>Delete</a>,
},

]);

const handleMenuClick = (e) => {
  if (e.key === '3') {
    window.location.href = 'https://www.google.com';
  }
  if (e.key === '2'){
    window.location.href = '/generatereport';
  }
};

const onButtonClick = (e) => {
  window.location.href = '/addproduct';
}










const [dataSource, setDataSource] = useState([]);
const [loading, setLoading] = useState(true);

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
const {
  token: { colorBgContainer, borderRadiusLG },
} = theme.useToken();


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
          <Search className="search" placeholder="input search text" onSearch={onSearch} style={{width: 100,}} enterButton />
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
          {/* <Input className='searchfield' placeholder="Search" /> */}

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
          
          <Table loading={loading} columns={columns} dataSource={dataSource} scroll={{y:420}} className="custom-table-header" ></Table>

          <Footer style={{ textAlign: 'center' }}>
          Ruwin ©{new Date().getFullYear()} Created by Ruwin Dissanayake
        </Footer>
        </Content>
      </Layout>
    </Layout>
</div>  

);
}


export default Hom;