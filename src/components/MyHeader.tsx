import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import './less/myHeader.less'
const logo = require('assets/images/logo.png')
const default_avatar = require('assets/images/default_avatar.jpg')

const MyHeader = () => {
  const [avatar, setAvatar] = useState(default_avatar)
  const [username, setUsername] = useState('匿名用户')
  useEffect(() => {
    let avatar1 = localStorage.getItem('avatar') || default_avatar
    let username1 = localStorage.getItem('username') || '匿名用户'
    setAvatar(avatar1)
    setUsername(username1)
  }, [])
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: '修改资料'
        },
        {
          type: 'divider'
        },
        {
          key: '3',
          label: '退出登录'
        }
      ]}
    />
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
