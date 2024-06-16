import React, { useState } from 'react';
import { Table, Button, Form, Input, Modal } from 'antd';

const Update = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
  ]);

  const [editing, setEditing] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  const [form] = Form.useForm();

  const handleEdit = (record) => {
    setEditing(true);
    setEditingRecord(record);
    form.setFieldsValue(record);
  };

  const handleDelete = (key) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      setDataSource((prev) =>
        prev.map((item) => (item.key === editingRecord.key ? { ...item, ...values } : item))
      );
      setEditing(false);
      setEditingRecord(null);
    } catch (errorInfo) {
      console.log('Validate Failed:', errorInfo);
    }
  };

  const handleCancel = () => {
    setEditing(false);
    setEditingRecord(null);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        visible={editing}
        title="Edit Record"
        okText="Save"
        onCancel={handleCancel}
        onOk={handleSave}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[{ required: true, message: 'Please input the age!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: 'Please input the address!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Update;



