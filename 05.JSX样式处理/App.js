import './app.css';
// 样式控制
// 1. 行内样式 - 在元素身上绑定一个style属性
const styleObj = { color: 'red', fontSize: '30px' }
// 2. 类名样式 - 在元素身上绑定一个className属性即可

// 动态控制类名，
const activeFlag = true

function App() {
  return (
    <div className="App">
      <span style={styleObj}>123</span>
      <p className={activeFlag ? 'active' : null}>456</p>
    </div>
  );
}

export default App;
