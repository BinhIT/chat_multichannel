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
      recipient:{
        allowNull: false,
        type:Sequelize.TEXT,
        primaryKey: true
      },
      sender_id: {
        type: Sequelize.TEXT
      },
      message: {
        type: Sequelize.TEXT
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Messages');
  }
};