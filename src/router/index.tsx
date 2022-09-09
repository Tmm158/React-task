import React from 'react'
import App from 'App'
import Loading from 'components/Loading'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// 定义数组每一项的接口
interface IRoute {
  path: string
  component: React.FC
  children?: IRoute[]
}
const router_arr: IRoute[] = [
  {
    path: '/',
    component: App as React.FC,
    children: [
      { path: 'list', component: lazy(() => import('pages/List')) },
      { path: 'edit', component: lazy(() => import('pages/Edit')) },
      { path: 'means', component: lazy(() => import('pages/Means')) },
      { path: 'nameList', component: lazy(() => import('pages/NameList')) }
    ]
  },
  { path: '/login', component: lazy(() => import('Login')) },
  { path: '/register', component: lazy(() => import('Register')) }
]
const MyRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading></Loading>}>
        <Routes>
          {router_arr.map((item, index) => {
            return item.children ? (
              // 有子路由
              <Route path={item.path} element={<item.component />} key={index}>
                {item.children.map((e, i) => (
                  <Route
                    path={e.path}
                    element={<e.component />}
                    key={i}
                  ></Route>
                ))}
              </Route>
            ) : (
              // 没有子路由
              <Route
                path={item.path}
                element={<item.component />}
                key={index}
              ></Route>
            )
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
export default MyRouter
