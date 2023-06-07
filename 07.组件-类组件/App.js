import React from "react"

// 函数组件的创建
function Hello () {
  return <div>我的第一个函数组件！！</div>
}
// 渲染
// 1. <Hello/> 2.<Hello></Hello>

// 类组件创建和渲染
class HelloComponent extends React.Component {
  render () {
    return <div>我是一个类组件！！！！</div>
  }
}

function App () {
  return (
    <div className="App">
      {/* 渲染Hello组件 */}
      <Hello></Hello>
      <Hello />
      {/* 类组件 */}
      <HelloComponent></HelloComponent>
    </div>
  )
}

export default App
