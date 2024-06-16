import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const Fin = () => (
  <Space direction="vertical">
    
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />

    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    
    
  </Space>
);
export default Fin;