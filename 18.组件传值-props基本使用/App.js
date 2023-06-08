import React from "react"

// 子组件
// 函数式：
function SonA (props) {
  // props 是一个对象，存着父组件的所有数据
  return (
    <div>函数组件SonA--{props.msg}</div>
  )
}
// 类组件
class SonB extends React.Component {

  render () {
    return (
      // 类组件必须通过this.props
      <div>类组件SonB--{this.props.msg}</div>
    )
  }
}

// 父组件
class App extends React.Component {
  state = {
    msg: 'this is message.'
  }

  render () {
    return (
      <>
        <SonA msg={this.state.msg}></SonA>
        <SonB msg={this.state.msg}></SonB>
      </>
    )
  }

}




export default App
