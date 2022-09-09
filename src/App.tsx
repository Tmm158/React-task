import {
  EditOutlined,
  ReadOutlined,
  FormOutlined,
  SelectOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'
import React from 'react'
import './App.less'
import { Outlet } from 'react-router-dom'
import MyHeader from 'components/MyHeader'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

const { Content, Sider } = Layout
// 侧边栏数据
const items2 = [
  {
    key: '1',
    icon: <EditOutlined />,
    label: '查看文章列表'
  },
  {
    key: '2',
    icon: <ReadOutlined />,
    label: '文章编辑'
  },
  {
    key: '3',
    icon: <FormOutlined />,
    label: '修改资料'
  },
  {
    key: '4',
    icon: <UserOutlined />,
    label: '管理员',
    children: [{ key: 'sub1', icon: <SelectOutlined />, label: '小编名单' }]
  }
]
// 内容主体模拟数据
interface IProps {
  key1: number
}
function App(props: IProps) {
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
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
            />
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
