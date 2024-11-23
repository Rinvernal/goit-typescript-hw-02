import { useEffect, useState } from "react"
import Articles from "./Articles/Articles"

import { featchArticles } from "../services/api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getData = async () => { 
      try {
        setIsLoading(true)
        setIsError(false)
        const { hits } = await featchArticles();
        setIsLoading(false)
        setArticles(hits);
      }
     catch (error) {
      console.log(error)
      setIsError(true)
      setIsLoading(false)
    }}
    getData();
  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      <Articles articles = {articles}/>
      {isError && <ErrorMessage/>}
    </div>
  )
}

export default App