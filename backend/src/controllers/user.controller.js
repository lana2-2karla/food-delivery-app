const { createUserService } = require('../services/user.service')

const createUserController = async (req, res) => {
  const message = await createUserService(req.body)
  return res.status(200).json(message)
}

module.exports = {
  createUserController
}
