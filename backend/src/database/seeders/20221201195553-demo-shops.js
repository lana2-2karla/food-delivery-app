module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Shops',
      [{
        name: 'Satoru',
        description: 'Comida japonesa',
        rating: '3.7',
        deliveryTime: '40-50',
        deliveryValue: '6.00',
        urlImage: 'image'
      },
      {
        name: 'Totopos',
        description: 'Comida mexicana',
        rating: '3.1',
        deliveryTime: '5-10',
        deliveryValue: '2.00',
        urlImage: 'image'
      },
      {
        name: 'Go Thai!',
        description: 'Comida tailandesa',
        rating: '4.5',
        deliveryTime: '40-50',
        deliveryValue: '7.00',
        urlImage: 'image'
      },
      {
        name: 'Stilo Mineiro',
        description: 'Comida brasileira',
        rating: '4.2',
        deliveryTime: '20-30',
        deliveryValue: '4.50',
        urlImage: 'image'
      }
      ], { timestamps: false })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Shops', null, {})
  }
}
