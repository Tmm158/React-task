import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, message, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './less/myHeader.less'
const logo = require('assets/images/logo.png')
const default_avatar = require('assets/images/default_avatar.jpg')

const MyHeader = () => {
  const [avatar, setAvatar] = useState(default_avatar)
  const [username, setUsername] = useState('匿名用户')
  const navigate = useNavigate()
  useEffect(() => {
    let avatar1 = localStorage.getItem('avatar') || default_avatar
    let username1 = localStorage.getItem('username') || '匿名用户'
    setAvatar(avatar1)
    setUsername(username1)
  }, [])
  // 点击下拉框修改资料，跳转修改资料页面
  const goMeans = () => {
    let token = localStorage.getItem('cms-token')
    if (token) {
      navigate('/means')
    } else {
      message.warning('token失效，请重新登录', 1.5)
      setTimeout(() => {
        navigate('/login')
      }, 1500)
    }
  }
  // 退出登录
  const logOut = () => {
    localStorage.removeItem('cms-token')
    localStorage.removeItem('username')
    localStorage.removeItem('avatar')
    message.success('即将跳转登录页面')
    setTimeout(() => {
      navigate('/login')
    }, 1500)
  }
  const menu = (
    <Menu>
      <Menu.Item key={1} onClick={goMeans}>
        修改资料
      </Menu.Item>
      <Menu.Item key={2} onClick={logOut}>
        退出登录
      </Menu.Item>
    </Menu>
  )
  return (
    <>
      <header className="header">
        <img src={logo} height={50} alt="" />
        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()} href="!#">
            <img
              src={process.env.SERVER_PORT_IMG + avatar + '.jpg'}
              alt=""
              width={40}
              style={{ borderRadius: '50%', marginRight: '10px' }}
            />
            <Space>
              <span style={{ marginRight: '5px' }}>{username}</span>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </header>
    </>
  )
}
export default MyHeader
