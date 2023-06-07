// react条件渲染
// 三运表达式、逻辑&&运算

// 三元表达式：满足条件才渲染一个span标签
const flag = true

function App() {
  return (
    <div className="App">
      {flag ? (
        <div>
          <span>sapn标签</span>
        </div>) : null}
      
    </div>
  );
}

export default App;
