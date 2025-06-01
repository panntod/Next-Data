import axios from 'axios'

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request Interceptor → Tambah Authorization otomatis
client.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

// Response Interceptor → Tangani error 401
client.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/'
    }
    return Promise.reject(error)
  }
)

export default client
