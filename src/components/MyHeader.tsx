import { DownOutlined, SmileOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd'
import React from 'react'
import './less/myHeader.less'
const logo = require('assets/images/logo.png')
const default_avatar = require('assets/images/default_avatar.jpg')

const MyHeader = () => {
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
              src={default_avatar}
              alt=""
              width={40}
              style={{ borderRadius: '50%', marginRight: '10px' }}
            />
            <Space>
              <span style={{ marginRight: '5px' }}>匿名用户</span>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </header>
    </>
  )
}
export default MyHeader
