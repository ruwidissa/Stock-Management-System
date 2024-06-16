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
  } from 'antd';

  import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
import { Flex, Progress } from 'antd';
import { Space, Tag } from 'antd';
  const { Header, Sider, Content, Footer} = Layout;
  const formatter = (value) => <CountUp end={value} separator="," />;

  const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
  
    const onButtonClick = (e) => {
      window.location.href = '/addproduct';
    }

function Tests() {

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
          defaultSelectedKeys={['2']}
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


<Row gutter={16}>
    <Col span={12}>
      <Statistic title="Total No. of Items available in the Stock" value={112893} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
    </Col>


<Flex gap="small" wrap>
<Progress type="circle" percent={75} />
<Progress type="circle" percent={70} status="exception" />
<Progress type="circle" percent={100} />
</Flex>
</Row>


<Footer style={{ textAlign: 'center' }}>
          Ruwin ©{new Date().getFullYear()} Created by Ruwin Dissanayake
        </Footer>
        </Content>
      </Layout>
    </Layout>
</div>  

);
}



export default Tests;