import axios from 'axios'

const apiConfig = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
})

apiConfig.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  } else {
    console.log('Nema tokena u headeru')
  }
  return config
})

export default apiConfig
