import React from "react"

// 兄弟组件传值
function SonA ({ message }) {
  return (
    <div>
      this is SonA.
      <br />
      这是b组件传过来的啊：{message}
    </div>
  )
}

function SonB ({ getSonBMsg }) {
  let bMsg = 'this is SonB data'

  const clickHandler = () => {
    getSonBMsg(bMsg)
  }
  return (
    <div>
      this is SonB.
      <button onClick={clickHandler}>click me. send message to SonA</button>
    </div>
  )
}

// 父组件
class App extends React.Component {
  // 准备数据
  state = {
    message: ''
  }

  getSonBMsg = (msg) => {
    this.setState({
      message: msg
    })
  }

  render () {
    return (
      <>
        <SonA message={this.state.message} />
        <SonB getSonBMsg={this.getSonBMsg} />
      </>
    )
  }

}

export default App
