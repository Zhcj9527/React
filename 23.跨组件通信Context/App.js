import React, { createContext } from "react"

// 1. 导入createContext方法并执行
const { Provider, Consumer } = createContext()

// 爷孙组件传值
function ComA () {
  return (
    <div>
      A
      <ComC />
    </div>
  )
}

function ComC () {
  return (
    <div>
      C
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
  )
}

// 父组件
class App extends React.Component {
  // 准备数据
  state = {
    message: 'this is message.'
  }


  render () {
    return (
      // 使用Provider包裹根组件
      <Provider value={this.state.message}>
        <>
          <ComA />
        </>
      </Provider>
    )
  }

}

export default App
