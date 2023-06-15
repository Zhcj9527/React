import React from "react"

// useState
// 1. 导入useState函数 react
// 2. 执行这个函数并且传入值  必须在*函数组件*中
// 3. 解构出[数据，修改数据的方法]
// 4. 使用数据 修改数据
import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}



export default App
