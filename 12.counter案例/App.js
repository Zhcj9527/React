import React from "react"

// 通过类组件修改状态的方式 counter
class Counter extends React.Component {
  state = {
    couter: 0
  }

  changeCouter = () => {
    this.setState({
      couter: this.state.couter + 1
    })
  }

  render () {
    return (
      <div>
        <div>{this.state.couter}</div>
        <button onClick={this.changeCouter}>点我</button>
      </div>
    )
  }
}



// 根组件
function App () {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  )
}

export default App
