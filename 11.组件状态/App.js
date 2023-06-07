import React from "react"

// 组件状态 类组件
class TestComponent extends React.Component {
  // 1.定义组件状态
  state = {
    // 定义各种属性，全是当前组件的状态
    name: 'zhcj'
  }

  // 修改name
  changeName = () => {
    //  3. 修改state中的状态name
    /* this.state.name = ？？   这么写是错误的，不可以直接修改 */
    // 注意： 必须通过一个方法 setState
    this.setState({
      name: 'zcj'
    })
  }

  render () {
    // 2.使用状态
    return (
      <div>
        this is a test.
        当前name: {this.state.name}
        <button onClick={this.changeName}>修改name</button>
      </div>
    )
  }
}

/* 
  总结：
  1. 编写组件 - 编写原生js或者函数
  2. 定义状态： 必须通过 state 实例属性方法，提供的一个对象，名称是固定的就叫做 state
  3. ‘修改’state中的任何属性，不可以直接赋值，必须走setState方法  这个方法来自于继承React.Component得到
  4. 这里的 this，很容易出现指向问题，按照上面写法是最推荐的 没有this指向问题
*/


// 根组件
function App () {
  return (
    <div className="App">
      <TestComponent></TestComponent>
    </div>
  )
}

export default App
