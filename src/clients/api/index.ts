import { clearLocalStorage, getLocalStorage, setLocalStorage } from '@/lib/local-storage'
import axios, { type AxiosResponse, AxiosRequestConfig } from 'axios'
import { JwtPayload, jwtDecode } from 'jwt-decode'

type Data = {
  access_token: string
  expires: number
  refresh_token: string
}

type RefreshTokenResponse = {
  data: Data
}

type Payload = {
  id: string
  role: string
  app_access: boolean
  admin_access: boolean
} & Pick<JwtPayload, 'iat' | 'exp' | 'iss'>

let refreshTokenPromise: Promise<string> | null = null
const URL = process.env.NEXT_PUBLIC_REST_API_URL || 'http://localhost:8055'

// Axios instance setup
const api = axios.create({
  baseURL: URL,
  timeout: 30000
})

// Helper function: Perform refresh token
async function refreshToken(): Promise<AxiosResponse<RefreshTokenResponse>> {
  const refreshToken = getLocalStorage('refreshToken')

  if (!refreshToken) {
    throw new Error('Refresh token not found')
  }

  return axios.post<RefreshTokenResponse>(
    URL + '/auth/refresh',
    { refresh_token: refreshToken, mode: 'json' },
    { timeout: 30000 }
  )
}

// Initialize authentication on app load
async function initializeAuth(): Promise<void> {
  const token = getLocalStorage<string>('accessToken')

  if (token) {
    const decoded = jwtDecode<Payload>(token)
    const isTokenExpired = decoded.exp && Date.now() >= (decoded.exp - 60) * 1000

    if (isTokenExpired) {
      try {
        await handleRefreshToken()
      } catch (error) {
        console.error('Token refresh failed during initialization:', error)
        clearLocalStorage()
      }
    }
  }
}

// Handle refresh token with retry logic
async function handleRefreshToken(retries = 3): Promise<string> {
  if (!refreshTokenPromise) {
    refreshTokenPromise = (async () => {
      try {
        const response = await refreshToken() // Axios request for token refresh
        const { access_token, refresh_token } = response.data.data

        // Update localStorage with new tokens
        setLocalStorage('accessToken', access_token)
        setLocalStorage('refreshToken', refresh_token)

        // Process any queued requests with the new token
        processQueue(null, access_token)

        return access_token // Return the token
      } catch (error: any) {
        if (error?.response?.status === 401) {
          // Refresh token expired or invalid
          console.error('Refresh token expired or unauthorized:', error)
          processQueue(error, undefined) // Reject all pending requests
          clearLocalStorage()
        } else if (retries > 1) {
          clearLocalStorage()
          return handleRefreshToken(retries - 1) // Retry logic
        }

        // Reject all pending requests if retries fail
        processQueue(error, undefined)
        clearLocalStorage()
        throw new Error('Failed to refresh token')
      } finally {
        refreshTokenPromise = null // Ensure promise is cleared after completion
      }
    })()
  }

  return refreshTokenPromise
}

// Queue to hold pending requests during token refresh
const requestQueue: Array<{
  resolve: (config: AxiosRequestConfig) => void
  reject: (error: unknown) => void
}> = []

// Process the queue: Resolve or reject pending requests
function processQueue(error: unknown, token?: string): void {
  requestQueue.forEach(({ resolve, reject }) => {
    if (token) {
      resolve({
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } else {
      reject(error)
    }
  })

  requestQueue.length = 0 // Clear the queue
}

// Request interceptor
api.interceptors.request.use(async config => {
  const token = getLocalStorage<string>('accessToken')
  const refreshToken = getLocalStorage<string>('refreshToken')

  if (config.url && ['/auth/login', '/auth/refresh', '/auth/logout'].includes(config.url)) {
    return config // Skip authentication for specific routes
  }

  if (!refreshToken) {
    clearLocalStorage() // If no refresh token, logout
    return config
  }

  if (token) {
    const decoded = jwtDecode<Payload>(token)
    const isTokenExpired = decoded.exp && Date.now() >= (decoded.exp - 60) * 1000

    if (!isTokenExpired) {
      config.headers.Authorization = `Bearer ${token}`
      return config
    }

    // Token is expired, queue the request
    if (!refreshTokenPromise) {
      refreshTokenPromise = handleRefreshToken().catch(error => {
        processQueue(error)
        clearLocalStorage()
        throw error
      })
    }

    return new Promise((resolve, reject) => {
      requestQueue.push({
        resolve: newConfig => {
          config.headers.Authorization = newConfig.headers?.Authorization
          resolve(config)
        },
        reject: error => {
          reject(error)
        }
      })
    })
  } else {
    // No token, attempt to refresh
    try {
      const newToken = await handleRefreshToken()
      config.headers.Authorization = `Bearer ${newToken}`
    } catch (error) {
      clearLocalStorage()
    }
  }

  return config
})

// On app load, validate token and refresh if necessary
initializeAuth().catch(error => console.error('Initialization failed:', error))

export default api
