import { Button, Form, Input, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import 'Login.less'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterApi } from './request/api'
const logo = require('./assets/images/logo.png')
interface IRegisterLogin {
  username: string
  password: string
  password1?: string
}
const Login = () => {
  const navigate = useNavigate()
  const onFinish = (values: IRegisterLogin) => {
    let { username, password, password1 } = values
    if (password !== password1) {
      message.error('请输入相同的密码', 1.5)
      return
    }
    //注册
    RegisterApi({ username: username, password: password }).then((res: any) => {
      //注册成功，跳转登录页面
      if (res.errCode === 0) {
        message.success('注册成功', 1.5)
        setTimeout(() => {
          navigate('/login')
        }, 1500)
      }
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
          rules={[{ required: true, message: '请输入用户名！' }]}
        >
          <Input
            placeholder="请输入用户名"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码！' }]}
        >
          <Input
            type="password"
            placeholder="请输入密码"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item
          name="password1"
          rules={[{ required: true, message: '请输入确认密码！' }]}
        >
          <Input
            type="password"
            placeholder="请再次确认密码"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item>
          <Link to="/login">已有账号？返回登陆</Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login
