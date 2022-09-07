import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import 'Login.less'
import { Link } from 'react-router-dom'
const logo = require('./assets/images/logo.png')
const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="login_box">
      <img src={logo} alt="" style={{ margin: '10px 50px 10px 50px' }} />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input
            placeholder="请输入用户名"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input
            type="password"
            placeholder="请输入密码"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item>
          <Link to="/register">还没账号？立即注册</Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login
