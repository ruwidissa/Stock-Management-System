import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';

import "./Login.css"
import { Button, Checkbox, Form, Input } from 'antd';
function Login() {

  const [email, setEmail] = useState(''); // State to hold email
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

      const handleSubmit = async (values) => {

      
        const url = 'http://localhost:8080/api/user/login'; 
        const payload = { email: values.email, password: values.password };    // Data to send in request body          
      
        try {
          const response = await fetch(url, {
            method: 'POST',  // HTTP POST method for sending data
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),  // Converting payload to JSON string
          });
      
          const responseData = await response.json(); // Parsing JSON response
    
          if (responseData.success) { // Checking if login was successful
            console.log('Login successful', responseData);
            setError('');
            window.location.href = '/home'; 
                             
          } else {
            setError(responseData.message || 'Login Failed'); 
            console.error('Login failed', responseData.message);
            window.location.href = '/';                                      
            // Handle errors or unsuccessful login here
          }
        } catch (error) {
          console.error('Failed to send data to the backend', error);
          setError('Failed to connect to the server'); 
          window.location.href = '/';                   
        }
      };

return(
<div className="login-container">

<header className="hader">Stock Management System</header>

<Form onFinish={handleSubmit} className="loginform"
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}

  >
     <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
          ]}
        >
      <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
    </Form.Item>

    <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
      <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
    </Form.Item>

    {error && (
          <Form.Item
            wrapperCol={{
              offset: 5,
              span: 16,
            }}
          >
            <span className="error-message" style={{ color: 'red' }}>{error}</span>
          </Form.Item>
        )}

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button className="login-button" type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

</div>  

);
}


export default Login;