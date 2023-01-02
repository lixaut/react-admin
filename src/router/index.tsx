
import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// 路由懒加载
const Home = lazy(() => import('pages/Home'))
const User = lazy(() => import('pages/User'))
const About = lazy(() => import('pages/About'))

// 懒加载函数
function lazyFunc(comp: JSX.Element) {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      {comp}
    </React.Suspense>
  )
}

const routes = [
  {
    path: '/',
    element: <Navigate to='/user' />
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'user',
        element: lazyFunc(<User />)
      },
      {
        path: 'about',
        element: lazyFunc(<About />)
      }
    ]
  }
]

export default routes