import React from "react"

//  this指向问题
class Test extends React.Component {
  // 通过这种方法去修正this
  // 相当于在类组件的初始化阶段 就可以把回调函数 永远指向当前组件实例对象
  constructor() {
    super()
    this.handler = this.handler.bind(this)
  }

  handler () {
    console.log(this)  // this 是 undefined
    // 不能再通过 this.setState 的方法去修改state了
  }

  render () {
    return (
      <button onClick={this.handler}>click</button>
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
