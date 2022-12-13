const { getAllPlatesAndShopsService } = require('../services/plates.service')

const getAllPlatesAndShopsController = async (req, res) => {
  try {
    const infoComplete = await getAllPlatesAndShopsService()
    return res.status(200).json(infoComplete)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = {
  getAllPlatesAndShopsController
}
