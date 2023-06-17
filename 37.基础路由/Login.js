import { useNavigate } from "react-router-dom"

const Login = () => {
  // 执行函数
  const navigate = useNavigate()
  // 路由跳转
  const goAbout = () => {
    // navigate('/about?id=1001', { replace: true })
    navigate('/about/1001', { replace: true })
  }


  return (
    <div>
      Login组件
      <button onClick={goAbout}>click me</button>
    </div>

  )
}

export default Login