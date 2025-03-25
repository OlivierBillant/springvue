import axios from 'axios'

const USERNAME = 'user'
const PASSWORD = '2142c07e-ed8d-4e95-b2c8-6f2972d38449' // Replace this with actual value

export const getUsers = async () => {
  const response = await axios.get('http://localhost:8080/users', {
    auth: {
      username: USERNAME,
      password: PASSWORD
    },
    withCredentials: true
  })
  return response.data
}
