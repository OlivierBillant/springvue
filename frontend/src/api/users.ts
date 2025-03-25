import axios from 'axios'

const BASE_URL = 'http://localhost:8080/users'
const AUTH = {
  username: 'user',
  password: '8cf818aa-6c59-4e4d-b10d-a96e2c7a156c'
}

export const getUsers = async () => {
  const response = await axios.get(BASE_URL, {
    auth: AUTH
  })
  return response.data
}

export const createUser = async (name: string) => {
  const response = await axios.post(BASE_URL, { name }, {
    auth: AUTH,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.data
}
