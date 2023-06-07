import React from "react"

// 函数组件的创建
function Hello () {
  const clickHandler = () => {
    console.log('函数组件的函数被触发啦..')
  }
  return <div onClick={clickHandler}>我的第一个函数组件！！</div>
}
// 渲染
// 1. <Hello/> 2.<Hello></Hello>

// 类组件创建和渲染
class HelloComponent extends React.Component {
  // 事件回调函数(标准写法)
  // 这么写是因为  回调函数的 this 指向的是当前组件的实例对象
  clickHandler = () => {
    console.log('类组件的回调函数被触发啦....')
  }

  render () {
    return <div onClick={this.clickHandler}>我是一个类组件！！！！</div>
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
