import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
// 路由组件
import Layout from "./Layout"
import Login from "./Login"
import Board from "./Board"
import Article from "./Article"
import NotFound from "./NotFound" // 404

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 定义二级路由嵌套 */}
            {/* 默认二级 添加index属性 无path */}
            <Route index element={<Board />}></Route>
            <Route path="article" element={<Article />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
