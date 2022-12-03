const { Plates } = require('../database/models')
const { Shops } = require('../database/models')

const getAllPlatesAndShopsService = async () => {
  const infoComplete = await Plates.findAll({
    include: [
      { model: Shops }
    ]
  })

  return infoComplete
}

module.exports = {
  getAllPlatesAndShopsService
}
