import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import {Input} from 'antd'
import {Table} from 'antd'

import "./All.css"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    GoogleOutlined,
    ProjectOutlined,
    DashboardOutlined
  } from '@ant-design/icons';
  import { Button, Layout, Menu, theme } from 'antd';
  const { Header, Sider, Content} = Layout;
function Hom() {
const [columns, setColumns] = useState([
{
    title: "Product ID",
    dataIndex: "id",
    width: '8%'
},
{
 title: "Product Name",
 dataIndex: "quote" ,
 width: '17%'
},
{
  title: "On Hand Qty",
  dataIndex: "author"
},
{
  title: "Vendor",
  dataIndex: "author"
},
{
  title: "Buying Price",
  dataIndex: "author"
},
{
  title: "Product Category",
  dataIndex: "author"
},
{
  title: "Selling Price",
  dataIndex: "author"
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

          <Button className="new-button" type='primary' onClick={onButtonClick} > New </Button>
          <Input className='searchfield' placeholder="Search" />

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
          <Table columns={columns} dataSource={dataSource} scroll={{y:420}}></Table>
        </Content>
      </Layout>
    </Layout>
</div>  

);
}


export default Hom;