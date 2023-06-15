import React, { useState } from "react"
import { createContext, useContext } from "react"

const Context = createContext()

const ComA = () => {
  const count = useContext(Context)
  return (
    <div>
      This is A
      App传过来的数据为：{count}
      <ComC />
    </div>
  )
}
const ComC = () => {
  const count = useContext(Context)
  return (
    <div>
      C
      App传过来的值：{count}
    </div>
  )
}

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <Context.Provider value={count}>
      <div>
        <ComA />
      </div>
      <button onClick={() => setCount(count + 2)}>click me</button>
    </Context.Provider>
  )
}

export default App
