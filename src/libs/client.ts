import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:3000/api/' : '/api/',
})

export default client
