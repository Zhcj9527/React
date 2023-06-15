import React, { useState, useEffect } from "react"

const Test = () => {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行了...')
    }, 2000)

    return () => {
      // 清理定时器   清除的动作是在return一个函数
      clearInterval(timer)
    }
  })

  return (
    <div>456</div>
  )
}

const App = () => {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      {flag ? <Test /> : null}
      <button onClick={() => setFlag(!flag)}>switch</button>
    </div>
  )
}



export default App
