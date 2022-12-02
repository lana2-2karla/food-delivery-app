module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Shops',
      [{
        name: 'Satoru',
        description: 'Comida japonesa',
        rating: '3.7',
        deliveryTime: '40-50',
        deliveryValue: '6.00',
        urlImage: 'https://www.gramadooficial.com.br/wp-content/uploads/2021/11/shutterstock_1937661397-scaled.jpg'
      },
      {
        name: 'Totopos',
        description: 'Comida mexicana',
        rating: '3.1',
        deliveryTime: '5-10',
        deliveryValue: '2.00',
        urlImage: 'https://img.itdg.com.br/tdg/images/blog/uploads/2022/04/shutterstock_2067116069.jpg'
      },
      {
        name: 'Go Thai!',
        description: 'Comida tailandesa',
        rating: '4.5',
        deliveryTime: '40-50',
        deliveryValue: '7.00',
        urlImage: 'https://img.taste.com.au/-rXeYPJs/taste/2016/11/chicken-pad-thai-94082-1.jpeg'
      },
      {
        name: 'Stilo Mineiro',
        description: 'Comida brasileira',
        rating: '4.2',
        deliveryTime: '20-30',
        deliveryValue: '4.50',
        urlImage: 'https://img.itdg.com.br/tdg/images/recipes/000/069/468/358656/358656_original.jpg?mode=crop&width=710&height=400'
      }
      ], { timestamps: false })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Shops', null, {})
  }
}
