'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Shops', {
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
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rating: {
        allowNull: false,
        type: Sequelize.STRING
      },
      deliveryTime: {
        allowNull: false,
        type: Sequelize.STRING
      },
      deliveryValue: {
        allowNull: false,
        type: Sequelize.STRING
      },
      urlImage: {
        allowNull: false,
        type: Sequelize.STRING
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Shops')
  }
}
