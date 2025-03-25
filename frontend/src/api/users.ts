import axios from 'axios'

const BASE_URL = 'http://localhost:8080/users'

const getAuthHeaders = () => {
  const token = localStorage.getItem('jwt')
  if (!token) throw new Error('JWT token missing')
  return {
    Authorization: `Bearer ${token}`
  }
}

export const getUsers = async () => {
  console.log('JWT:', localStorage.getItem('jwt'))
  const res = await axios.get(BASE_URL, {
    headers: getAuthHeaders(),
    withCredentials: true
  })
  return res.data
}

export const createUser = async (name: string) => {
  const res = await axios.post(
    BASE_URL,
    { name },
    {
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json'
      },
      withCredentials: true
    }
  )
  return res.data
}
