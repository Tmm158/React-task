import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import React from 'react'
import './App.less'
import { Outlet } from 'react-router-dom'
import MyHeader from 'components/MyHeader'


const { Content, Sider } = Layout
const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`
      }
    })
  }
})

const App = () => {
  return (
    <>
      <Layout className='container'>
        {/* 头部 */}
        <MyHeader></MyHeader>
        <Layout className='container_content'>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
        {/* 尾部 */}
        <footer
          style={{
            textAlign: 'center',
            color: '#fff',
            height: '70px',
            lineHeight: '70px',
            background: '#001529'
          }}
        >
          Respect | Copyright &copy; 2022 Author tmm
        </footer>
      </Layout>

      <Outlet></Outlet>
    </>
  )
}
export default App
