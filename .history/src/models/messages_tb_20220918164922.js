'use strict';
const { STRING } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Messages.init({
    createdAt: {
      allowNull: false,
      type:DataTypes.DATE
    },
    sender:DataTypes.TEXT,
    recipient:{
      allowNull: false,
      DataTypes.TEXT
    },
    sender_id:DataTypes.TEXT,
    message: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};