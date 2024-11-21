import { useEffect, useState } from "react"
import Articles from "./Articles/Articles"
import axios from "axios"

const App = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react').then(res => setArticles(res.data.hits));
      setArticles(response.data.hits)
    }
    getData()
  }, []);
  return (
    <div>
      <Articles articles = {articles}/>
    </div>
  )
}

export default App