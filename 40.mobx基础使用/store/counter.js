// mobx store案例  -  原生js的写法
import { makeAutoObservable } from "mobx"

class CounterStore {
  // 1. 定义数据
  count = 0
  constructor() {
    // 2. 把数据弄成响应式的
    makeAutoObservable(this)
  }
  // 3. 定义action函数
  addCount = () => {
    this.count++
  }
}

// 4. 实例化 导出给react使用
const counterStore = new CounterStore()

export { counterStore } 
