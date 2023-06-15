import React, { useState } from "react"
import { useContext } from "react"

import context from "./context"

const ComA = () => {
  const count = useContext(context)
  return (
    <div>
      This is A
      App传过来的数据为：{count}
      <ComC />
    </div>
  )
}
const ComC = () => {
  const count = useContext(context)
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
    <context.Provider value={count}>
      <div>
        <ComA />
      </div>
      <button onClick={() => setCount(count + 2)}>click me</button>
    </context.Provider>
  )
}

export default App
