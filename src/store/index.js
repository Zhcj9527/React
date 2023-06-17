// 组合子模块的
// 封装统一导出的供业务使用的方法
import React from "react"
import { CounterStore } from "./counter.Store"
import { ListStore } from "./list.Store"

// 1. 声明一个rootStore
class RootStore {
  constructor() {
    // 对子模块实例化
    // 实例化根store的时候，根store有两个属性：counterStore和listStore
    // 各自对应的值 就是我们导入的子模块实例对象
    this.counterStore = new CounterStore()
    this.listStore = new ListStore()
  }
}


// 样板代码
// 实例化操作
const rootStore = new RootStore()
// 使用react  context机制  完成统一方法的封装  - 全局调用
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export default useStore
