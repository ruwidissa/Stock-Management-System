import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';  // Importing Link and useParams for navigation and accessing URL parameters
import { Divider, Layout, Menu, theme, Checkbox } from 'antd';
import "./All.css"
import {MenuFoldOutlined, MenuUnfoldOutlined, GoogleOutlined, ProjectOutlined, DashboardOutlined} from '@ant-design/icons';
import {Button, Form, Input, InputNumber, Select, Typography} from 'antd';

  const { Header, Sider, Content, Footer} = Layout;
  const { Text } = Typography;
  const BackendURL = 'http://localhost:8080/api/user/saveData';

function Update() {
  const [isSaleItem, setIsSaleItem] = useState(false);
  const [isStockClearingItem, setStockClearingItem] = useState(false);
  const { product_id } = useParams();  // Getting product_id from URL parameters
  const [form] = Form.useForm();  // Creating a form instance

const handleMenuClick = (e) => {
  if (e.key === '3') {
    window.location.href = 'https://www.google.com';
  }
  if (e.key === '2'){
    window.location.href = '/generatereport';
  }
  if (e.key === '1'){
    window.location.href = '/home'
  }
};
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

// Function to handle checkbox change for sale item
const handleCheckboxChange = (e) => {
  setFormData({ ...formData, sale_item: e.target.checked ? 1 : 0 });
  setIsSaleItem(e.target.checked);
};

const handleCheckboxChangeStock = (e) => {
  setFormData({ ...formData, stock_clearing_item: e.target.checked ? 1 : 0 });
  setStockClearingItem(e.target.checked);
}

// Layout configuration for form items
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

 // Options for product type
const productType = [
  {value:'T-Shirt', label:'T-Shirt'},
  {value:'Shirt', label:'Shirt'},
  {value:'Trouser', label:'Trouser'},
  {value:'Blouse', label:'Blouse'},
  {value:'Skirt', label:'Skirt'},
  {value:'Skinny', label:'Skinny'},
  {value:'Legging', label:'Legging'}
]

const materialType = [
  {value:'Silk', label:'Silk'},
  {value:'Cotton', label:'Cotton'},
  {value:'Polyester', label:'Polyester'}
]

const vendorType = [
  {value:'Internal', label:'Internal'},
  {value:'External', label:'External'}
]


const [collapsed, setCollapsed] = useState(true);
const {
  token: { colorBgContainer, borderRadiusLG },
} = theme.useToken();

const initialValues = {
  "Vendor Name": "Internal Vendor",
  "Vendor Address": "Internal Address"
};

// Function to handle select change for material type
const handleSelectChange = (value) => {
  setFormData({ ...formData, material_name: value });
};
// Function to handle select change for product type
const handleSelectChangeType = (value) => {
  const secondLetter = value.charAt(0).toUpperCase();
  setFormData({ ...formData, material_type: value, secondLetter});
};
// Function to handle select change for vendor type
const handleSelectChangeVendor = (value) => {
  setFormData({ ...formData, vendor_type: value });
};

 // State to store form data
const [formData, setFormData] = useState({
  dataField: '',
  firstLetter: '',
  secondLetter: '',
  product_id: product_id,
  sale_item: 0,
  stock_clearing_item: 0,
});

// Function to handle input change in the form
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
console.log(formData);

const handleSubmit = async () => {
  const response = await fetch(BackendURL,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  window.location.href = '/home'
};

  // State to store data source
const [dataSource, setDataSource] = useState([]);

// Function to retrieve data for the product by ID
useEffect (() => {
  const retrieveData = async () =>{
    try{
      const response = await fetch(`http://localhost:8080/api/user/getDataId/${product_id}`)
      const result = await response.json();
      setDataSource(result);
      console.log(result);
      form.setFieldsValue(result); 
    } catch (error) {
      console.error('Error retreiving data', error);
    }
  };
  retrieveData();

},[]);

return(
<div>

<header className="hader">Stock Management System</header>
<Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['0']}
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
        <Link to= "/addproduct" >  
          <Button className="new-button" type='primary' > New </Button>
          </Link>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }} 
        ><Form
            {...formItemLayout} form={form} initialValues={{ product_id }}
            onFinish={handleSubmit}
    variant="filled"
    style={{ display: 'flex', justifyContent: 'space-between' }}
    
  >
    <div style={{ flex: 1 }}>
     <Divider orientation="left"><h3>Product Details</h3></Divider>
    <Form.Item
      label="Product Name"
      name="product_name"
      onChange={handleInputChange}
      rules={[
        {
          required: true,
          message: 'Please Enter the Product Name!',
        },
      ]}
    >
      <Input name="product_name"/>
    </Form.Item>

    <Form.Item
      label="Item Quantity"
      name="quantity"
      onChange={handleInputChange}
      rules={[
        {
          required: true,
          message: 'Please Enter the Item Quantity!',
        },
      ]}
    >
      <InputNumber name="quantity" min={1} style={{ width: '100%' }}/>
    </Form.Item>

    <Form.Item
      label="Purchasing Price"
      name="buying_price"
      onChange={handleInputChange}
      rules={[
        {
          required: true,
          message: 'Please input the Purchasing Price!',
        },
      ]}
    >
      <InputNumber name="buying_price" min={1} style={{ width: '100%' }}/>
    </Form.Item>

    <Form.Item
      label="Selling Percentage (%)"
      name="selling_percentage"
      onChange={handleInputChange}
      rules={[
        {
          required: false,
          message: 'Please input the Selling Percentage!',
        },
      ]}
    >
       <InputNumber
                    name="selling_percentage"
                    min={0}
                    max={100}
                    style={{ width: '100%' }}
                    disabled = {isSaleItem || isStockClearingItem}
                  />
    </Form.Item>

    <Form.Item name="sale_item" label="Is this is a sale item">
    <Checkbox  onChange={handleCheckboxChange} disabled= {isStockClearingItem}>Yes</Checkbox>
    </Form.Item>

    <Form.Item
      label="Sale Percentage (%)"
      name="sale_percentage"
      onChange={handleInputChange}
      rules={[
        {
          required: false,
          message: 'Please input the Sale Percentage!',
        },
      ]}
    >
       <InputNumber
       name="sale_percentage"
                    min={0}
                    max={100}
                    style={{ width: '100%' }}
                    disabled={!isSaleItem || isStockClearingItem}
                  />
    </Form.Item>

    <Form.Item label="Is this is a stock clearing item">
    <Checkbox onChange={handleCheckboxChangeStock} disabled={isSaleItem}>Yes</Checkbox>
    </Form.Item>

    <Form.Item
      label="Final Selling Price"
      name="stock_clearing_price"
      onChange={handleInputChange}
      hidden={!isStockClearingItem}
      rules={[
        {
          required: false,
          message: 'Please enter the Final Selling Price!',
        },
      ]}
    >
       <InputNumber name="stock_clearing_price" hidden={!isStockClearingItem} style={{ width: '100%' }} />
    </Form.Item>
    
    <Form.Item
      label="Product Type"
      name="material_name"
      onChange={handleInputChange}
      rules={[
        {
          required: true,
          message: 'Please select the Product type!',
        },
      ]}
    >
      <Select name="material_name" options={productType} onChange={handleSelectChange} />
    </Form.Item>

    <Form.Item
      label="Material Type"
      name="material_type"
      onChange={handleInputChange}
      rules={[
        {
          required: true,
          message: 'Please select the Material type!',
        },
      ]}
    >
      <Select name="material_type" options={materialType} onChange={handleSelectChangeType}/>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 6,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" onFinish={handleSubmit} className="button-spacing">
        Submit
      </Button>
      <Link to= "/home" >
      <Button type="primary" >
        Cancel
      </Button>
      </Link>
    </Form.Item>
    </div>

    <div style={{ flex: 1, marginLeft: '24px' }}>
    <Divider orientation="left"><h3>Vendor Details</h3></Divider>

    <Form.Item
      label="Vendor Type"
      name="vendor_type"
      rules={[
        {
          required: false,

        },
      ]}
    >
      <Select name="vendor_type" options={vendorType} onChange={handleSelectChangeVendor} />
    </Form.Item>

    <Form.Item
      label="Vendor Name"
      name="vendor_name"
      onChange={handleInputChange}
      rules={[
        {
          required: true,
          message: 'Please enter the vendor name!'
        },
      ]}
    >
      <Input name="vendor_name" />
    </Form.Item>

    <Form.Item
      label="Vendor Address"
      name="vendor_address"
      onChange={handleInputChange}
      rules={[
        {
          required: false,
        },
      ]}
    >
      <Input.TextArea name="vendor_address" />
    </Form.Item>

    <Form.Item
          label="Product ID"
          name="product_id"
          hidden
          rules={[
            {
              required: false,
              message: 'Product ID is required!',
            },
          ]}
        >
          <Input name="product_id" value={product_id} />
          
        </Form.Item>
    
    </div>
        </Form>
        <Footer style={{ textAlign: 'center' }}>
          Ruwin ©{new Date().getFullYear()} Created by Ruwin Dissanayake
        </Footer>
        </Content>
      </Layout>
    </Layout>
</div>  

);
}


export default Update;
