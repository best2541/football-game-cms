import axios from "axios"

const baseURL = process.env.REACT_APP_API // change base url
const headers = {}

if (localStorage.accessToken) {
  headers.authorization = `Bearer ${localStorage.accessToken}`
}

const axiosInstance = axios.create({
  baseURL,
  headers
})

export default axiosInstance
