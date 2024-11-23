import { useEffect, useState } from "react"
import Articles from "./Articles/Articles"

import { featchArticles } from "../services/api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [query, setQuery] = useState('react')

  useEffect(() => {
    const getData = async () => { 
      try {
        setIsLoading(true)
        setIsError(false)
        const { hits } = await featchArticles(query);
        setArticles(hits);
      }
     catch (error) {
      console.log(error)
      setIsError(true)
      
    }
    finally{
      setIsLoading(false)
    }
  }
    getData();
  }, [query]);
  const handleChangeQuery = (query) => {
    setQuery(query)
  }
  return (
    <div>
      <SearchBar onChangeQuery={handleChangeQuery}/>
      {isLoading && <Loader />}
      <Articles articles = {articles}/>
      {isError && <ErrorMessage/>}
    </div>
  )
}

export default App