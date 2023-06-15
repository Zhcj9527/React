import React, { useEffect } from "react"
import { useRef } from "react"

// 组件实例是类组件
// dom对象  标签
class TestC extends React.Component {
  getName = () => {
    return 'this is child Test.'
  }
  render () {
    return (
      <div>类组件</div>
    )
  }
}

const App = () => {
  const testRef = useRef(null)
  const h1Ref = useRef(null)

  useEffect(() => {
    console.log(testRef.current)
    console.log(h1Ref.current)
  }, [])

  return (
    <div>
      <TestC ref={testRef} />
      <h1 ref={h1Ref}>this is h1</h1>
    </div>
  )
}

export default App
