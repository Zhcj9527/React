import React, { useState } from "react"

const Counter = ({ count1 }) => {
  const [count, setCount] = useState(() => {
    return count1
  })

  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  )
}

const App = () => {

  return (
    <div>
      <Counter count1={10} />
      <hr />
      <Counter count1={20} />
    </div>
  )
}



export default App
