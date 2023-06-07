import React, { createRef } from "react"

class Test extends React.Component {
  // 实例属性是可以自定义的
  msgRef = createRef()

  // 回调函数
  getValue = () => {
    // 通过msgRef获取input value值 - this.msgRef.current 固定写法
    console.log(this.msgRef.current.value)
  }

  render () {
    return (
      <>
        <input
          type="text"
          ref={this.msgRef} />
        <button onClick={this.getValue}>点我获取输入框的值</button>
      </>
    )
  }
}



// 根组件
function App () {
  return (
    <div className="App">
      <Test></Test>
    </div>
  )
}

export default App
