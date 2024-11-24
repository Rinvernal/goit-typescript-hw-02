import axios from "axios"

axios.defaults.baseURL = 'https://api.unsplash.com'
export const featchArticles = async(query, page) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query,
      page,
      per_page: 20,
      client_id: 'iKCclFhzYrQiEeAiJrETchEs74nNCF07M6aMDGmkO5w',
    }
  })
  return response.data;
}