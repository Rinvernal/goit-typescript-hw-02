import axios from "axios"

export const featchArticles = async() => {
  const response = await axios.get('https://hn.algolia.com/api/v1/search1?query=react')
  return response.data;
}