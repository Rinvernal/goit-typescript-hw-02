import axios from "axios"
import { APIResponse } from "../types";


axios.defaults.baseURL = 'https://api.unsplash.com'
export const featchArticles = async(query:string, page:number):Promise<APIResponse> => {
  const response = await axios.get<APIResponse>(`/search/photos`, {
    params: {
      query,
      page,
      per_page: 20,
      client_id: 'iKCclFhzYrQiEeAiJrETchEs74nNCF07M6aMDGmkO5w',
    }
  })
  return response.data;
}