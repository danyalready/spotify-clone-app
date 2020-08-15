import axios from 'axios'
import { getAuthToken } from './authToken'

const defaults = {
  baseURL: 'https://api.spotify.com/v1',
  headers: () => ({
    'Content-Type': 'application/json',
    Authorization: getAuthToken() ? `Bearer ${getAuthToken()}` : undefined,
  }),
}

const api = async (method, url, variable) => {
  return await axios({
    method,
    url: `${defaults.baseURL}${url}`,
    data: method !== 'get' ? variable : undefined,
    headers: defaults.headers(),
  })
}

export default {
  get: (...args) => api('get', ...args),
}
