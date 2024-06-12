import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import {Table} from 'antd'
import { Divider } from 'antd';
import "./All.css"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    GoogleOutlined,
    ProjectOutlined,
    DashboardOutlined
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
  } from 'antd';
  import { Checkbox } from 'antd';
  const { Header, Sider, Content, Footer} = Layout;

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

const materialOption = [
  {value:'Cilk', label:'Silk'},
  {value:'Cotton', label:'Cotton'}
]

const [dataSource, setDataSource] = useState([]);

useEffect(() => {

fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then((result) => {
  setDataSource(result.quotes)

});})

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
      name="Product Name"
      rules={[
        {
          required: true,
          message: 'Please Enter the Product Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Item Quantity"
      name="Item Quantity"
      rules={[
        {
          required: true,
          message: 'Please Enter the Item Quantity!',
        },
      ]}
    >
      <InputNumber min={1} style={{ width: '100%' }}/>
    </Form.Item>

    <Form.Item
      label="Purchasing Price"
      name="Purchasing Price"
      rules={[
        {
          required: true,
          message: 'Please input the Purchasing Price!',
        },
      ]}
    >
      <InputNumber min={1} style={{ width: '100%' }}/>
    </Form.Item>

    <Form.Item
      label="Selling Percentage (%)"
      name="Selling Percentage"
      rules={[
        {
          required: true,
          message: 'Please input the Selling Percentage!',
        },
      ]}
    >
       <InputNumber
                    min={0}
                    max={100}
                    formatter={value => `${value}%`}
                    parser={value => value.replace('%', '')}
                    style={{ width: '100%' }}
                    disabled = {isSaleItem || isStockClearingItem}
                  />
    </Form.Item>

    <Form.Item label="Is this is a sale item">
    <Checkbox onChange={handleCheckboxChange} disabled= {isStockClearingItem}>Yes</Checkbox>
    </Form.Item>

    <Form.Item
      label="Sale Percentage (%)"
      name="Sale Percentage"
      rules={[
        {
          required: false,
          message: 'Please input the Sale Percentage!',
        },
      ]}
    >
       <InputNumber
                    min={0}
                    max={100}
                    formatter={value => `${value}%`}
                    parser={value => value.replace('%', '')}
                    style={{ width: '100%' }}
                    disabled={!isSaleItem || isStockClearingItem}
                  />
    </Form.Item>

    <Form.Item label="Is this is a stock clearing item">
    <Checkbox onChange={handleCheckboxChangeStock} disabled={isSaleItem}>Yes</Checkbox>
    </Form.Item>

    <Form.Item
      label="Stock Clearing Price"
      name="Stock Clearing Price"
      rules={[
        {
          required: false,
          message: 'Please enter the Stock Clearing Price!',
        },
      ]}
    >
       <InputNumber disabled={!isStockClearingItem} style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      label="Product Type"
      name="Product Type"
      rules={[
        {
          required: true,
          message: 'Please select the product type!',
        },
      ]}
    >
      <Select options={materialOption} />
    </Form.Item>

    <Form.Item
      label="Product Material"
      name="Product Material"
      rules={[
        {
          required: true,
          message: 'Please select the Product Material!',
        },
      ]}
    >
      <Cascader />
    </Form.Item>

  
   

    <Form.Item
      wrapperCol={{
        offset: 6,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
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
      label="Vendor Name"
      name="Vendor Name"
      rules={[
        {
          required: true,
          message: 'Please Enter the Product Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Vendor Address"
      name="Vendor Address"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      label="Mentions"
      name="Mentions"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Mentions />
    </Form.Item>

    <Form.Item
      label="Select"
      name="Select"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Select />
    </Form.Item>

    <Form.Item
      label="Cascader"
      name="Cascader"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Cascader />
    </Form.Item>

    <Form.Item
      label="TreeSelect"
      name="TreeSelect"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <TreeSelect />
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


export default AddProduct;