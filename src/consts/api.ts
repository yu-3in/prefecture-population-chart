const RESAS_API = {
  baseUrl: import.meta.env.DEV ? 'http://localhost:3000/api/' : '/api/',
  headers: {
    'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY,
  },
}

export default RESAS_API
