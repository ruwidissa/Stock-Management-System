import React, { useState } from 'react';
import { Form, InputNumber, Row, Col } from 'antd';


const CalculationForm = () => {
    const [result, setResult] = useState(0);
  
    const onValuesChange = (changedValues, allValues) => {
      // Extract values from the form
      const { value1 = 0, value2 = 0 } = allValues;
  
      // Perform calculation
      const sum = value1 + value2;
  
      // Store the result
      setResult(sum);
    };
  
    return (
      <div>
        <Form
          name="calculationForm"
          initialValues={{ value1: 0, value2: 0 }}
          onValuesChange={onValuesChange}
        >
          <Form.Item
            label="Value 1"
            name="value1"
            rules={[{ required: true, message: 'Please input the first value!' }]}
          >
            <InputNumber />
          </Form.Item>
  
          <Form.Item
            label="Value 2"
            name="value2"
            rules={[{ required: true, message: 'Please input the second value!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
  
        <div>
          <h3>Calculation Result: {result}</h3>
        </div>
      </div>
    );
  };
  
  export default CalculationForm;
  