import React from "react"

// 子传父：子组件调父组件的函数

// 子组件
function Son ({ getSonMsg }) {
  const clickHandler = () => {
    let msg = '我是说帅逼，也就是我自己...'
    getSonMsg(msg)
  }
  return (
    <div>
      this is a son.
      <button onClick={clickHandler}>click</button>
    </div>
  )
}



// 父组件
class App extends React.Component {
  // 准备数据
  state = {

  }

  // 1. 准备一个函数，传给子组件
  getSonMsg = (sonMsg) => {
    console.log(sonMsg)
  }

  render () {
    return (
      <>
        <Son
          getSonMsg={this.getSonMsg}
        />
      </>
    )
  }

}

export default App
