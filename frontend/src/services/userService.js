/* eslint-disable no-useless-return */
import axios from 'axios'

export default class UserServices {
  constructor () {
    this.baseUrl = 'http://localhost:3001'
  }

  async login (dados) {
    await axios.post(`${this.baseUrl}/login`, {
      email: dados.email,
      password: dados.password
    })
      .then(function (response) {
        localStorage.setItem('email', dados.email)
        localStorage.setItem('token', response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
    return true
  }
  // Não funcionou :(
  /* plates () {
    axios.get(`${this.baseUrl}/plates`).then((response) => {
      console.log('responseeeee', response.data)
      return response.data
    })
      .catch((error) => {
        console.error('Error fetching data', error)
      })
  } */
}
