import React from "react"
import { useEffect } from "react"
import axios from 'axios'



const App = () => {
  useEffect(() => {
    // 发送请求
    const loadData = async () => {
      let res = await axios.get('http://geek.itheima.net/v1_0/channels')
      console.log(res)
    }

    loadData()
  }, [])

  return (
    <div>

    </div>
  )
}



export default App
