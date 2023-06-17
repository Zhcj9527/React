import { makeAutoObservable } from "mobx"

class ListStore {
  list = ['vue', 'react']
  constructor() {
    makeAutoObservable(this)
  }

  addList = () => {
    this.list.push('angular')
  }
}

export { ListStore }