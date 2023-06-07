// react列表渲染
// map操作, 需要重复渲染那个模板，就return谁
// 注意事项：遍历列表的时候，也是需要类型为number、string的key，提高diff性能
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

function App() {
  return (
    <div className="App">
      <ul>
        {songs.map(song => <li key={song.id}>{song.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
