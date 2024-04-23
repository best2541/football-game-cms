import axios from "axios"

const baseURL = process.env.REACT_APP_API // change base url
const headers = {}

if (localStorage.accessToken) {
  headers.Authorization = `Bearer ${localStorage.accessToken}`
}


export const axiosInstance = axios.create({
  baseURL,
  headers
})

axiosInstance.interceptors.response.use(
  res => {
    return res
  },
  err => {
    if (err.response.status === 401) {
      window.location.href = 'login'
      window.localStorage.removeItem('accessToken')
      window.localStorage.removeItem('refreshToken')
      window.localStorage.removeItem('userData')
    }
  }
)

