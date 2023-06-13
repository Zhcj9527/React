import React from "react"

function ListItem ({ children }) {

  return <div>123--{children}</div>
}


// 父组件
class App extends React.Component {


  render () {
    return (
      <>
        <ListItem>
          {<div>45646546</div>}
        </ListItem>
      </>
    )
  }
}

export default App
