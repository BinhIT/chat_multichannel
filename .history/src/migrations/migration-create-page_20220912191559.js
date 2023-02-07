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
      sender: {
        type: Sequelize.STRING
      },
      recipient: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Messages');
  }
};