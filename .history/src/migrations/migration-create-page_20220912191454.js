'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pages', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      sender:DataTypes.VARCHAR,
      recipient:DataTypes.VARCHAR,
      message: DataTypes.TEXT,
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pages');
  }
};