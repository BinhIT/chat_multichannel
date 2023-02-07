'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Messages', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // sender:DataTypes.VARCHAR,
      // recipient:DataTypes.VARCHAR,
      // message: DataTypes.TEXT,
      sende: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Messages');
  }
};