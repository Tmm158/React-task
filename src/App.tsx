import {
  EditOutlined,
  ReadOutlined,
  FormOutlined,
  SelectOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import './App.less'
import { Link, Outlet, useLocation } from 'react-router-dom'
import MyHeader from 'components/MyHeader'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import SubMenu from 'antd/lib/menu/SubMenu'

const { Content, Sider } = Layout
// 内容主体模拟数据
interface IProps {
  key1: number
}
function App(props: IProps) {
  // 解决一刷新就默认选中第一项的问题
  const [asideKey, setAsideKey] = useState('0')
  // 获取当前路由
  const location = useLocation()
  // 监听路由变化
  useEffect(() => {
    switch (location.pathname) {
      case '/list':
        setAsideKey('1')
        break
      case '/edit':
        setAsideKey('2')
        break
      case '/means':
        setAsideKey('3')
        break
      case '/nameList':
        setAsideKey('4-1')
        break
    }
  }, [location.pathname])
  return (
    <>
      <Layout className="container">
        {/* 头部 */}
        <MyHeader key={props.key1}></MyHeader>
        <Layout className="container_content">
          {/* {侧边栏} */}
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['1']}
              selectedKeys={[asideKey]}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1">
                <Link to="/list">
                  <ReadOutlined />
                  查看文章列表
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/edit">
                  <EditOutlined />
                  文章编辑
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/means">
                  <FormOutlined />
                  修改资料
                </Link>
              </Menu.Item>
              <SubMenu key="4" icon={<UserOutlined />} title="管理员">
                <Menu.Item key="4-1">
                  <Link to="/nameList">
                    <SelectOutlined />
                    小编名单
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* 面包屑 */}
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            {/* 內容主体 */}
            <Content className="mycontent">
              <Outlet></Outlet>
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
    </>
  )
}

// state的映射
const mapStateToProps = (state: { key: number }) => {
  return {
    key1: state.key
  }
}
// dispatch的映射
// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     changeKeyFn() {
//       dispatch({ type: 'changeKey' })
//     }
//   }
// }

// 把state和dispatch的方法给props
export default connect(mapStateToProps)(App)
