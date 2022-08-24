import axios from "axios";

const baseURL ="https://mks-frontend-challenge-api.herokuapp.com/api/v1/";

const api = axios.create({
  baseURL,
})
export default api