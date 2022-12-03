module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        firstName: 'Fred',
        email: 'fred@graodireto.com.br',
        password: '$2a$12$u/J3Gb/.5Lzi/oUwTzOG3eEgbtej1C4G84fY2./hqa3AbsV/3/Pda'
        // 123Fred@
      },
      {
        firstName: 'Lana',
        email: 'lana@graodireto.com.br',
        password: '$2a$12$AYyPh6MCF5/3jxk0UzJgNOIrHSScybbAOVi5yeR8alVlkF87Wv5.q'
        // 123Lana@
      },
      {
        firstName: 'Nessa',
        email: 'nessa@graodireto.com.br',
        password: '$2a$12$y8YIFbvLuWG52E4BCkqbH.t6WMGzY3RCYLFv1PxLEKKRJOO3LreEm'
        // 123Nessa@
      }
      ], { timestamps: false })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
