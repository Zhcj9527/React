import React from "react"

class Test extends React.Component {
  // 1. 声明用来控制input value的react组件自己的状态
  state = {
    message: 'this is a message.'
  }

  //回调函数
  inputChange = (e) => {
    // 4,拿到输入框最新的值
    this.setState({
      message: e.target.value
    })
  }

  render () {
    return (
      <>
        {/* 2. 给input框的value属性绑定react state */}
        {/* 3. 给input框绑定一个change事件 - 是为了拿到当前输入框的值*/}
        INPUT: <input
          type="text"
          value={this.state.message}
          onChange={this.inputChange} />
        <div>{this.state.message}</div>
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
