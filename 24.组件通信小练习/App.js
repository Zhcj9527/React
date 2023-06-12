import React from "react"

function ListItem ({ item, delItem }) {

  return (
    <>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.info}</p>
      <button onClick={() => delItem(item.id)}>删除</button>
    </>
  )
}

// 父组件
class App extends React.Component {
  // 列表数据
  state = {
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
    ]
  }
  // 给子组件传递函数
  delItem = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id)
    })
  }

  render () {
    return (
      <>
        {/* <ListItem /> */}
        {this.state.list.map((item) => <ListItem key={item.id} item={item} delItem={this.delItem} />)}
      </>
    )
  }

}

export default App
