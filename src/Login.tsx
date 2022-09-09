import { Button, Form, Input, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import 'Login.less'
import { Link, useNavigate } from 'react-router-dom'
import { LoginApi } from './request/api'
const logo = require('./assets/images/logo.png')
const Login = () => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    let { username, password } = values
    LoginApi({ username: username, password: password }).then((res: any) => {
      //登陆成功，跳转根路径
      message.success(res.message, 1.5)
      //保存用户信息
      localStorage.setItem('username', res.data.username)
      localStorage.setItem('cms-token', res.data['cms-token'])
      localStorage.setItem('avatar', res.data.avatar)
      setTimeout(() => {
        navigate('/')
      }, 1500)
    })
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
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login
