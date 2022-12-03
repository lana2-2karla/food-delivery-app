module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        firstName: 'Fred',
        email: 'fred@graodireto.com.br',
        password: '$2b$10$GnsDQXgt1iApv/Lbs3ao..545U1DPjScKJ4RPyRc4TU/13mHZnvom'
        // 123Fred@
      },
      {
        firstName: 'Lana',
        email: 'lana@graodireto.com.br',
        password: '$2b$10$LpqZrWiN58AAFai5TPOGDerbtl.jsAxa8mi0ZnORdWAGMdp7ptfjC'
        // 123Lana@
      },
      {
        firstName: 'Nessa',
        email: 'nessa@graodireto.com.br',
        password: '$2b$10$oGXuzJJe2UnxliBuWR1imOp.HQD8VsmdMYBuNf7O8ZjlauoeUaphu'
        // 123Nessa@
      }
      ], { timestamps: false })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
