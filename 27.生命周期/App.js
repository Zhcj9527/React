import React from "react"

class Test extends React.Component {
  // 卸载钩子，清理定时器 
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render () {
    return (
      <div>12320</div>
    )
  }
}

// 父组件
class App extends React.Component {
  constructor() {
    super()
    console.log('constructor.')
  }

  state = {
    count: 0,
    flag: true
  }

  componentDidMount () {
    console.log('componentDidMount..')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate....')
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag
    })
  }

  render () {
    console.log('render...')
    return (
      <>
        {/* 状态切换 */}
        {this.state.flag ? <Test /> : null}
        <button onClick={this.clickHandler}>{this.state.count}</button>
      </>
    )
  }
}

export default App
