module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Plates', 'ingredients', {
        type: Sequelize.STRING
      })
    ])
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.changeColumn('Plates', 'ingredients')])
  }
}
