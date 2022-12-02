module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Plates',
      [{
        name: 'Mabo Nasu',
        ingredients: 'berinjela,carne moída de porco,tenmenjang,toubanjang',
        value: '60.00',
        urlImage: 'https://sudachirecipes.com/wp-content/uploads/2022/08/mabo-nasu-thumbnail.jpg',
        shopId: 41
      },
      {
        name: 'Takikomi Gohan',
        ingredients: 'arroz japonês,salmão,cogumelos shiitake,cenoura',
        value: '47.00',
        urlImage: 'https://i0.wp.com/misomemoirs.com/wp-content/uploads/2021/04/IMG_9408-main.jpg?w=1200&ssl=1',
        shopId: 41
      },
      {
        name: 'Tofu Fedorento',
        ingredients: 'soja,vinho de arroz,sal,vinagre',
        value: '38.00',
        urlImage: 'https://img.freepik.com/fotos-gratis/um-lanche-chines-tofu-fedorento_1205-9155.jpg',
        shopId: 41
      },
      {
        name: 'Burrito de Frango',
        ingredients: 'arroz,feijão,frango,molho citronete',
        value: '56.11',
        urlImage: 'https://dd7gu835n6agp.cloudfront.net/wp-content/uploads/2021/10/burrito-de-frango-com-guacamole-889x500.jpg',
        shopId: 42
      },
      {
        name: 'Camarão tailandês',
        ingredients: 'curry,gengibre,abobrinha,camarão',
        value: '43.20',
        urlImage: 'https://www.entrepratosecopos.com.br/storage/receitas/imagem1_6943.jpg',
        shopId: 43
      },
      {
        name: 'Frango com quiabo',
        ingredients: 'frango,quiabo,cebolinha,salsinha',
        value: '27.80',
        urlImage: 'http://www.saboresajinomoto.com.br/uploads/images/recipes/frango-com-quiabo-1.jpg',
        shopId: 44
      }
      ], { timestamps: false })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Plates', null, {})
  }
}
