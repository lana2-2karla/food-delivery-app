const { User } = require('../database/models')
const { bcrypt } = require('bcrypt')
const { generateToken } = require('../helpers/jwtToken')

const loginservice = async (userData) => {
  const userExists = await User.findOne({
    where: {
      email: userData.email
    }
  })
  const status = { status: 400, message: 'User does not exist' }
  if (!userExists) throw status

  const passDecripted = await bcrypt.compare(userData.password, userExists.password)

  const status2 = { status: 401, message: 'Unauthorized' }

  if (!passDecripted) throw status2

  const { id, firstname, email } = userExists

  const token = await generateToken({ id, firstname, email })

  return token
}

module.exports = {
  loginservice
}
