module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        firstName: 'Fred',
        email: 'fred@graodireto.com.br',
        password: '123Fred@'
      },
      {
        firstName: 'Lana',
        email: 'lana@graodireto.com.br',
        password: '123Lana@'
      },
      {
        firstName: 'Nessa',
        email: 'nessa@graodireto.com.br',
        password: '123Nessa@'
      }
      ], { timestamps: false })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
