'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Plates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ingredients: {
        allowNull: false,
        type: Sequelize.JSON
      },
      value: {
        allowNull: false,
        type: Sequelize.STRING
      },
      urlImage: {
        allowNull: false,
        type: Sequelize.STRING
      },
      shopId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Shops',
          key: 'id'
        }
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Plates')
  }
}
