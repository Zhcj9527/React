import { observer } from 'mobx-react-lite'

import useStore from './store'

const App = () => {
  const { counterStore } = useStore()

  return (
    <div>
      {counterStore.count}
      <button onClick={counterStore.addCount}>+</button>
    </div>
  )
}

export default observer(App)
