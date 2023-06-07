// react条件渲染
// 复杂的多分支的逻辑，建议为写成一个函数
const getHtag = (type) => {
  if(type === 1) {
    return <h1>this is h1</h1>
  } 
  if(type === 2) {
    return <h2>this is h2</h2>
  } 
  if(type === 1) {
    return <h3>this is h3</h3>
  } 

}

function App() {
  return (
    <div className="App">
      {getHtag(1)}
    </div>
  );
}

export default App;
