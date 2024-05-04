import axios from "axios"
import { API_ENDPOINTS } from "../../../constants/index"

export const deletePost = async (id: string) => {
  try {
    axios.delete(`${API_ENDPOINTS.posts}/${id}`).then(() => {
      window.location.reload()
    }).catch((error) => {
      console.log(error)
    })
  } catch (error) {
    console.error('An error occurred while deleting the post', error);
  }
}