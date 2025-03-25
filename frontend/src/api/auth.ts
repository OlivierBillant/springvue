import axios from 'axios'

export const login = async (username: string, password: string): Promise<string> => {
  const res = await axios.post('http://localhost:8080/auth/login', { username, password })
  return res.data.token
}
