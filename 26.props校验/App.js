import React from "react"
import PropTypes from 'prop-types'

// 函数组件
const Test = ({ list, pageSize = 10 }) => {
  // 直接在函数参数中解构出，赋予默认值（推荐写法）
  return (
    <div>
      {list.map(item => <p>{item}</p>)}
      <p>{pageSize}</p>
    </div>
  )
}

Test.propTypes = {
  // 定义各种规则
  list: PropTypes.array.isRequired // 限定list的类型必须是数组类型
}
// 默认的props对象 - 给组件的props提供默认值
/* Test.defaultProps = {
  pageSize: 10 // 传入以传入的为主，否则是默认值
} */

// 类组件的默认值
class Test1 extends React.Component {
  // 推荐写法，类的静态属性
  static defaultProps = {
    pageSize: 60
  }

  render () {
    return (
      <div>{this.props.pageSize}</div>
    )
  }
}
// 默认
/* Test1.defaultProps = {
  pageSize: 50
} */

// 父组件
class App extends React.Component {


  render () {
    return (
      <>
        <Test list={[1, 2, 3]} />
        <Test1 />
      </>
    )
  }
}

export default App
