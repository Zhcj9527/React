import React from "react"

//  this指向问题
class Test extends React.Component {

  handler () {
    console.log(this)  // this 是 undefined
    // 不能再通过 this.setState 的方法去修改state了
  }

  render () {
    // render函数中的this 指向当前组件实例对象
    return (
      // onClick={this.handler} =>  onClick={() => this.handler()}
      // 写成箭头函数的形式，直接沿用父组件的this指向，render中的this
      <button onClick={() => this.handler()}>click</button>
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
