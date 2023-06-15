import React from "react"

// useEffect
import { useState, useEffect } from "react"

// 在修改数据之后 把count值放在页面标题中...
// 1. 导入useEffect函数
// 2. 在函数组件中执行. 传入回调 并且定义副作用 
// 3. 修改状态更新组件时，副作用函数也随之执行

// 依赖项控制副作用的执行时机
// 1. 默认状态下 - 无依赖项
// 组件初始化先执行一次, 等到数据修改 组件更新时再次执行
// 2. 添加 - 空数组依赖项
// 组件初始化时执行一次

// 3. 依赖特定项
// 组件初始化的时候执行一次， 依赖特定项发生变化时会再次发生变化
// 4. 注意事项
// 只要useEffect回调函数中用到的数据状态，就应该在依赖项数组声明 否则会有bug

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('zhcj')

  useEffect(() => {
    // 定义副作用
    console.log('副作用执行')
    document.title = count + name
  }, [count])

  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setName(name + 'j')}>{name}</button>
    </>
  )
}



export default App
