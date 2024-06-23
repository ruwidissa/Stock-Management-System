import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import {MenuFoldOutlined, MenuUnfoldOutlined, GoogleOutlined, ProjectOutlined, DashboardOutlined,StockOutlined, ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import { Col, Row, Statistic, Button, Card, Layout, Menu, theme } from 'antd';
import CountUp from 'react-countup';
import { Flex, Progress } from 'antd';
import { Space, Tag } from 'antd';
import "./All.css"

  const { Header, Sider, Content, Footer} = Layout;
  const formatter = (value) => <CountUp end={value} separator="," />;
  const BackendURLQuantity = 'http://localhost:8080/api/user/totalQuantity';
  const BackendURLTotalPrice = 'http://localhost:8080/api/user/getTotalBuyingPrice';
  const BackendURLSaleItemPercentage = 'http://localhost:8080/api/user/getSalePercentage';
  const BackendURLStockItemPercentage = 'http://localhost:8080/api/user/getStockPercentage';

  // Function to handle button click and redirect to the add product page
    const onButtonClick = (e) => {
      window.location.href = '/addproduct';
    }

function Report() {

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
// State variables to store data fetched from the backend
const [dataSource1, setDataSource1] = useState([]);  // State for total quantity of items
const [dataSource2, setDataSource2] = useState([]);  // State for total price of items
const [dataSourceSaleItem, setDataSourceSaleItem] = useState([]);  // State for sale items percentage
const [dataSourceStockItem, setDataSourceStockItem] = useState([]);  // State for stock items percentage
const [collapsed, setCollapsed] = useState(true);
const {
  token: { colorBgContainer, borderRadiusLG },
} = theme.useToken();

  // Fetch total quantity data on component mount
useEffect(() => {
  const fetchData1 = async () => {
      try {
          const response = await fetch(BackendURLQuantity);
          const result = await response.json();
          setDataSource1(result);
      } catch (error) {
          console.error('Error fetching total quantity:', error);
      }
  };

  fetchData1();
}, []);

  // Fetch total price data on component mount
useEffect(() => {
  const fetchData2 = async () => {
    try{
      const response = await fetch(BackendURLTotalPrice);
      const result = await response.json();
      setDataSource2(result);
    } catch (error) {
      console.log('Error fetching total price:', error)
    }
  };
  fetchData2();
}, []);

 // Fetch sale item percentage data on component mount
useEffect(() => {
  const fetchDataSalePercentage = async () => {
    try{
      const response = await fetch(BackendURLSaleItemPercentage);
      const result = await response.json();
      setDataSourceSaleItem(result);
    } catch (error) {
      console.log('Error fetching Sale Percentage:', error)
    }
  };
  fetchDataSalePercentage();
}, []);

// Fetch stock item percentage data on component mount
useEffect(() => {
  const fetchDataStockPercentage = async () => {
    try{
      const response = await fetch(BackendURLStockItemPercentage);
      const result = await response.json();
      setDataSourceStockItem(result);
    } catch (error) {
      console.log('Error fetching Sale Percentage:', error)
    }
  };
  fetchDataStockPercentage();
}, []);

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
      <Card bordered={false}>
        <Statistic
        formatter={formatter}
          title="Total No. of Sale Items as a percentage"
          value={dataSourceSaleItem * 100}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          // prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>

        <Statistic
        className="statistic"
        formatter={formatter}
          title="Total No. of Stock Clearing Items as a percentage"
          value={dataSourceStockItem * 100}
          precision={2}
          valueStyle={{
            color: '#343aeb',
            
          }}
          prefix={<StockOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>

<Card title="Stock Details" size="small">
<Row gutter={16}>
    <Col span={12}>
      <Statistic title="Total No. of Items available in the Stock" value={dataSource1} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="Total value of the products available in the stock" value={dataSource2} precision={2} formatter={formatter} />
    </Col>
</Row>
    </Card>
{/* <Flex gap="small" wrap>
<Progress type="circle" percent={dataSourceSaleItem * 100} />
<Progress type="circle" percent={50} status="exception" />
<Progress type="circle" percent={dataSourceSaleItem * 100} />
</Flex> */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ruwin ©{new Date().getFullYear()} Created by Ruwin Dissanayake
        </Footer>
      </Layout>
    </Layout>
</div>  
);
}



export default Report;
