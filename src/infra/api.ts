import axios from 'axios'

axios.interceptors.request.use(
  async (config) => {
    const userToken = null

    config.baseURL = 'https://fakestoreapi.com'

    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`
    }

    return config
  },
  async (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default axios
