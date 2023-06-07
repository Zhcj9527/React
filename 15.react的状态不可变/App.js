import React from "react"

//  this指向问题
class Test extends React.Component {
  // 状态 - 是不能直接修改的
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: 'zhhcj',
      age: 18
    }
  }
  // 回调
  handler = () => {
    // 多个setState是可以写在一起的...也是可以分开写的
    // 单个值、数组修改
    this.setState({
      count: this.state.count + 1,
      list: [...this.state.list, 4],
    })
    // 对象的修改
    this.setState({
      person: {
        ...this.state.person,
        name: 'zhcjjjj'
      }
    })
    // 数组删除 - filter
    this.setState({
      list: this.state.list.filter((item) => item !== 2)
    })

  }

  render () {
    return (
      <>
        <div>{this.state.count}</div>
        <div>{this.state.list.map(item => <p key={item}>{item}</p>)}</div>
        <div>{this.state.person.name}</div>
        <button onClick={this.handler}>click</button>
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
