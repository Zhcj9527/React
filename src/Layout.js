// 二级路由出口
import { Outlet } from "react-router-dom"

const Layout = () => {

  return (
    <div>
      Layout组件
      {/* 二级路由 */}
      <Outlet />
    </div>
  )
}

export default Layout