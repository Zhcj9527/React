// 识别常规的变量
const name = 'zhcj123'
// 原生方法调用
const getAge = () => {
  return 18
}
// 三元运算符
const flag = true

function App() {
  return (
    <div className="App">
      {name}--{getAge()} <br/>
      {flag ? 'good' : '132'}
    </div>
  );
}

export default App;
