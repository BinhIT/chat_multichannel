'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Messages', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      sender: {
        type: Sequelize.TEXT
      },
      recipient: {
        type: Sequelize.TEXT
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