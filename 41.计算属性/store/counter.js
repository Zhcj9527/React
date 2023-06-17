// mobx store案例  -  原生js的写法
import { makeAutoObservable } from "mobx"

class CounterStore {
  // 1. 定义数据
  count = 0
  // 定义一个原始数据
  list = [1, 2, 3, 4, 5]
  constructor() {
    // 2. 把数据弄成响应式的
    makeAutoObservable(this)
  }
  // 定义计算属性
  get filterList () {
    return this.list.filter((item) => item > 2)
  }
  // 修改list
  addList = () => {
    this.list.push(7, 8, 9, 10)
  }
  // 3. 定义action函数
  addCount = () => {
    this.count++
  }
}

// 4. 实例化 导出给react使用
const counterStore = new CounterStore()

export { counterStore } 
