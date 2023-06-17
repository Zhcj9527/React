import { BrowserRouter, Link, Routes, Route, useRoutes } from "react-router-dom"
// 路由组件
import Layout from "./Layout"
import Login from "./Login"
import Board from "./Board"
import Article from "./Article"
import NotFound from "./NotFound" // 404

// 1.准备一个数组，定义路由中的所有路由对应关系
const routeList = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Board />
      },
      {
        path: 'article',
        element: <Article />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

// 2.使用useRoutes方法传入routesList生成Routes组件
const WrapperRoutes = () => {
  let element = useRoutes(routeList)
  console.log(element)
  return element
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* 3. 替换之前的Routes组件 */}
        <WrapperRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
