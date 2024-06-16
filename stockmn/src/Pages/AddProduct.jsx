import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import {Table} from 'antd'
import { Divider } from 'antd';
import "./All.css"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    GoogleOutlined,
    ProjectOutlined,
    DashboardOutlined
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import {
    Button,
    Form,
    Input,
    InputNumber,
    Select,
    Typography
  } from 'antd';
  import { Checkbox } from 'antd';
  const { Header, Sider, Content, Footer} = Layout;
  const { Text } = Typography;
  
  const BackendURL = 'http://localhost:8080/api/user/saveData';
function AddProduct() {
  const [isSaleItem, setIsSaleItem] = useState(false);
  const [isStockClearingItem, setStockClearingItem] = useState(false);

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

const handleCheckboxChange = (e) => {
  setIsSaleItem(e.target.checked);
}

const handleCheckboxChangeStock = (e) => {
  setStockClearingItem(e.target.checked);
}

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

const handleSelectChange = (value) => {
  setFormData({ ...formData, material_name: value });
};
const handleSelectChangeType = (value) => {
  const secondLetter = value.charAt(0).toUpperCase();
  setFormData({ ...formData, material_type: value, secondLetter});
};
const handleSelectChangeVendor = (value) => {
  setFormData({ ...formData, vendor_name: value });
};



const timestamp = Date.now();
console.log(timestamp);

const [formData, setFormData] = useState({
  dataField: '',
  firstLetter: '',
  secondLetter: '',
  product_id: {timestamp},
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleInputChangeName = (e) => {
  const { name, value } = e.target;
  const firstLetter = value.charAt(0).toUpperCase();

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
                    // formatter={value => `${value}%`}
                    // parser={value => value.replace('%', '')}
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
                    // formatter={value => `${value}%`}
                    // parser={value => value.replace('%', '')}
                    style={{ width: '100%' }}
                    disabled={!isSaleItem || isStockClearingItem}
                  />
    </Form.Item>

    <Form.Item label="Is this is a stock clearing item">
    <Checkbox onChange={handleCheckboxChangeStock} disabled={isSaleItem}>Yes</Checkbox>
    </Form.Item>

    <Form.Item
      label="Stock Clearing Price"
      name="stock_clearing_price"
      onChange={handleInputChange}
      rules={[
        {
          required: false,
          message: 'Please enter the Stock Clearing Price!',
        },
      ]}
    >
       <InputNumber name="stock_clearing_price" disabled={!isStockClearingItem} style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      label="Product Type"
      name="material_name"
      onChange={handleInputChange}
      rules={[
        {
          required: true,
          message: 'Please select the product type!',
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
          message: 'Please select the Product Material!',
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
      <Button type="primary" htmlType="submit" onClick={handleSubmit} className="button-spacing">
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
      name="vendorType"
      rules={[
        {
          required: false,

        },
      ]}
    >
      <Select name="vendorType" options={vendorType} onChange={handleSelectChangeVendor} />
    </Form.Item>

    <Form.Item
      label="Vendor Name"
      name="vendor_name"
      rules={[
        {
          required: false,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Vendor Address"
      name="vendorAddress"
      rules={[
        {
          required: false,
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>

    {/* <Form.Item label="Product ID" name="product_id" onChange={handleInputChange}>
      
      
        {timestamp}{formData.firstLetter}{formData.secondLetter}
      
    </Form.Item> */}

    <Form.Item
          label="Product ID"
          name="product_id"
          onChange={handleInputChange}
          hidden
          rules={[
            {
              required: false,
              message: 'Product ID is required!',
            },
          ]}
        >
          <Input name="product_id" value={formData.product_id} onChange={handleInputChange} hid />
        </Form.Item>

    {/* <Form.Item
      label="Item Code"
      name="Item Code"
      rules={[
        {
          required: true,

        },
      ]}
    >
      <Mentions disabled/>
    </Form.Item> */}

  
    
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


export default AddProduct;