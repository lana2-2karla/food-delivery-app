const { createUserService } = require('../services/user.service')

const createUserController = async (req, res) => {
  try {
    const message = await createUserService(req.body)
    return message.status
      ? res.status(message.status).json(message.message)
      : res.status(201).json(message)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = {
  createUserController
}
