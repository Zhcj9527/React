// 路由组件
import About from './About'
import Home from './Home'
import Login from './Login'
// 路由内置组件
import { HashRouter, BrowserRouter, Link, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <HashRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about/:id' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
