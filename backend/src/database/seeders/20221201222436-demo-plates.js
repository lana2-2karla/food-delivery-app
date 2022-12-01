module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Plates',
      [{
        name: 'MABO NASU',
        ingredients: ['berinjela', 'carne moída de porco', 'tenmenjang', 'toubanjang'],
        value: '60.00',
        urlImage: 'image',
        shopId: 1
      },
      {
        name: 'TAKIKOMI GOHAN',
        ingredients: ['arroz japonês', 'salmão', 'cogumelos shiitake', 'cenoura'],
        value: '47.00',
        urlImage: 'image',
        shopId: 1
      },
      {
        name: 'KANTAN SHOUGAYAKI',
        ingredients: ['carne de porco', 'shoyu', 'gengibre', 'tomate'],
        value: '38.00',
        urlImage: 'image',
        shopId: 1
      },
      {
        name: 'Burrito de Frango',
        ingredients: ['arroz', 'feijão', 'frango', 'molho citronete'],
        value: '56.11',
        urlImage: 'image',
        shopId: 2
      },
      {
        name: 'Camarão tailandês',
        ingredients: ['curry', 'gengibre', 'abobrinha', 'camarão'],
        value: '43.20',
        urlImage: 'image',
        shopId: 3
      },
      {
        name: 'Frango com quiabo',
        ingredients: ['frango', 'quiabo', 'cebolinha', 'salsinha'],
        value: '27.80',
        urlImage: 'image',
        shopId: 4
      }
      ], { timestamps: false })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Plates', null, {})
  }
}
