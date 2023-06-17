// 1. 导入counterStore
import { counterStore } from './store/counter'
// 2. 导入中间件
import { observer } from 'mobx-react-lite'

const App = () => {
  return (
    <div>
      {/* 渲染store中的count */}
      {counterStore.count}
      {/* 点击事件触发action函数修改count的值 */}
      <button onClick={counterStore.addCount}>点我修改count</button>
    </div>
  )
}

export default observer(App)
