import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import "./All.css"
import { MenuFoldOutlined, MenuUnfoldOutlined, GoogleOutlined, ProjectOutlined, DashboardOutlined} from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import {Button, Form, Input, InputNumber, Select, Typography, Checkbox} from 'antd';

  const { Header, Sider, Content, Footer} = Layout; // Destructuring Layout components from antd
  const { Text } = Typography;
  
  const BackendURL = 'http://localhost:8080/api/user/saveData';
function AddProduct() {
  const [isSaleItem, setIsSaleItem] = useState(0);
  const [isStockClearingItem, setStockClearingItem] = useState(false);

  // Function to handle menu item clicks
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

 // Layout settings for form items
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

 // Options for product type select input
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

  // Accessing theme tokens for styling
const {token: { colorBgContainer, borderRadiusLG },
} = theme.useToken();

const initialValues = {
  "Vendor Name": "Internal Vendor",
  "Vendor Address": "Internal Address"
};

 // Function to handle material name select change
const handleSelectChange = (value) => {
  setFormData({ ...formData, material_name: value });
};
// Function to handle material type select change
const handleSelectChangeType = (value) => {
  const secondLetter = value.substring(0,3).toUpperCase();
  setFormData({ ...formData, material_type: value, secondLetter});
};
// Function to handle vendor type select change
const handleSelectChangeVendor = (value) => {
  setFormData({ ...formData, vendor_type: value });
};
// Generating a timestamp for product ID
const timestamp = Date.now();
console.log(timestamp);

  // State for form data
const [formData, setFormData] = useState({
  dataField: '',
  firstLetter: '',
  secondLetter: '',
  product_id: {timestamp},
  sale_item: 0,
  stock_clearing_item: 0,
});

// Function to handle input change for form fields
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

  // Function to handle input change for product name and generate a product ID
const handleInputChangeName = (e) => {
  const { name, value } = e.target;
  const firstLetter = value.substring(0,3 ).toUpperCase();
  const product_id = `${firstLetter}${timestamp}`;
      setFormData({ ...formData, [name]: value, firstLetter, product_id });
};

const handleSubmit = async () => {
  const response = await fetch(BackendURL,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  window.location.href = '/addproduct'
  console.log(formData)
};

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

          <Button className="new-button" type='primary' > New </Button>

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
            {...formItemLayout}
            onFinish={handleSubmit}
    variant="filled"
    style={{ display: 'flex', justifyContent: 'space-between' }}
    
  >
    <div style={{ flex: 1 }}>
     <Divider orientation="left"><h3>Product Details</h3></Divider>
    <Form.Item
      label="Product Name"
      name="product_name"
      rules={[
        {
          required: true,
          message: 'Please Enter the Product Name!',
        },
        {
          min: 3,
          message: 'Product Name must be at least 3 characters long!',
        },
      ]}
    >
      <Input name="product_name" onChange={handleInputChangeName}/>
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

    <Form.Item name="sale_item" label="Is this is a sale item" valuePropName="checked">
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

    <Form.Item name="stock_clearing_item" label="Is this is a stock clearing item" valuePropName="checked">
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
      rules={[
        {
          required: true,
          message: 'Please select the Material type!',
        },
      ]}
    >
      <Select name="material_type" options={materialType} onChange={handleSelectChangeType} />
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
          message: 'Please enter the vendor name!',
        },
      ]}
    >
      <Input name="vendor_name" onChange={handleInputChange}/>
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
      <Input.TextArea name="vendor_address" onChange={handleInputChange} />
    </Form.Item>

    <Form.Item
          label="Product ID"
          name="product_id"
          onChange={handleInputChange}
          hidden
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input name="product_id" value={formData.product_id} onChange={handleInputChange} hid />
        </Form.Item>
    
    </div>
        </Form>

        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ruwin ©{new Date().getFullYear()} Created by Ruwin Dissanayake
        </Footer>
      </Layout>
    </Layout>
</div>  

);
}


export default AddProduct;