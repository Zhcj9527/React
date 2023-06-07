// 函数组件的创建
function Hello () {
  return <div>我的第一个函数组件！！</div>
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
