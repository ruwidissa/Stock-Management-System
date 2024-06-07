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
  const { Header, Sider, Content} = Layout;
function AddProduct() {

const handleMenuClick = (e) => {
  if (e.key === '3') {
    window.location.href = 'https://www.google.com';
  }
  if (e.key === '2'){
    window.location.href = '/generatereport';
  }
};

const { RangePicker } = DatePicker;
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
<Layout>
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
    style={{
      maxWidth: 600,
    }}
  >
     <Divider orientation="left">Product Details</Divider>
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
      <Input />
    </Form.Item>

    <Form.Item
      label="Item Quantity"
      name="Item Quantity"
      rules={[
        {
          required: true,
          message: 'Please input the quantity!',
        },
      ]}
    >
      <InputNumber
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item
      label="TextArea"
      name="TextArea"
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
      label="Product Type"
      name="Product Type"
      rules={[
        {
          required: true,
          message: 'Please select the product type!',
        },
      ]}
    >
      <Select />
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

    <Form.Item
      wrapperCol={{
        offset: 6,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>

    <Divider orientation="left">Vendor Details</Divider>

<div className="inputform">
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
        </Content>
      </Layout>
    </Layout>
</div>  

);
}


export default AddProduct;