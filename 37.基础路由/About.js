import { useSearchParams, useParams } from "react-router-dom"
const About = () => {
  /* let [params] = useSearchParams()
  let id = params.get('id') */
  const params = useParams()
  let id = params.id
  return (
    <div>About组件: id: {id}</div>
  )
}

export default About