import React from "react"

// 子组件
// 函数式：
/* function SonA (props) {
  // props 是一个对象，存着父组件的所有数据
  // 解构赋值
  const { list, uesrInfo, getMsg, child } = props
  console.log(props)
  return (
    <div>函数组件SonA--
      {list.map(item => <p key={item}>{item}</p>)}
      <br />
      {uesrInfo.name}--{uesrInfo.age}
      <button onClick={getMsg}>触发父组件传入的函数</button><br />
      <br />
      {child}
    </div>
  )
} */
// 直接在参数中直接解构
function SonA ({ list, uesrInfo, getMsg, child }) {
  // props 是一个对象，存着父组件的所有数据
  return (
    <div>函数组件SonA--
      {list.map(item => <p key={item}>{item}</p>)}
      <br />
      {uesrInfo.name}--{uesrInfo.age}
      <button onClick={getMsg}>触发父组件传入的函数</button><br />
      <br />
      {child}
    </div>
  )
}

// 类组件
/* class SonB extends React.Component {

  render () {
    return (
      // 类组件必须通过this.props
      <div>类组件SonB--{this.props.msg}</div>
    )
  }
} */

// 父组件
class App extends React.Component {
  state = {
    list: [1, 2, 3],
    uesrInfo: {
      name: 'zhcj',
      age: 18
    }
  }

  getMsg = () => {
    console.log('父组件的函数')
  }

  render () {
    return (
      <>
        <SonA
          list={this.state.list}
          uesrInfo={this.state.uesrInfo}
          getMsg={this.getMsg} // 函数
          child={<span>你是帅逼...</span>} // jsx-类似插槽
        ></SonA>
      </>
    )
  }

}

export default App
