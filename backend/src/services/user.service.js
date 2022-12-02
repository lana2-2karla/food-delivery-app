const { User } = require('../database/models')
const { bcrypt } = require('bcrypt')

const createUserService = async (userData) => {
  const userExists = await User.findOne({
    where: {
      email: userData.email
    }
  })
  const status = { status: 400, message: 'email already exists' }
  if (userExists) throw status

  // segundo parâmetro é o nível de processamento do pc p/ gerar a hash
  const hashPassword = await bcrypt.hash(userData.password, 10)

  const userCreated = await User.create({
    firstName: userData.firstName,
    email: userData.email,
    password: hashPassword
  })

  if (userCreated) return 'sucess'
}

module.exports = {
  createUserService
}
