// 函数组件的创建
function Hello () {
  const clickHandler = (e, msg) => {
    console.log('函数组件的函数被触发啦..', msg)
  }
  // 需要传参是需要写成柯理化的形式    
  return <div onClick={(e) => clickHandler(e, 'click msg')}>点我</div>
}
// 渲染
// 1. <Hello/> 2.<Hello></Hello>

function App () {
  return (
    <div className="App">
      {/* 渲染Hello组件 */}
      <Hello></Hello>
      <Hello />
    </div>
  )
}

export default App
