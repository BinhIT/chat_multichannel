'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pages', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
    token: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      fan_count: {
        type: Sequelize.STRING
      },
      status: {
        type:Sequelize.BOOLEAN
      },
      mess_count: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      id_admin: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pages');
  }
};