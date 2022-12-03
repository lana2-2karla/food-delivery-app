const { loginservice } = require('../services/login.service')

const loginController = async (req, res) => {
  try {
    const token = await loginservice(req.body)
    return token.status
      ? res.status(token.status).json(token.message)
      : res.status(200).json(token)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = {
  loginController
}
