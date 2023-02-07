'use strict';
const { STRING } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email:DataTypes.STRING,
    acess_token:DataTypes.STRING,
    uid:DataTypes.STRING,
    password:DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phonenumber:DataTypes.STRING,
    gender:DataTypes.BOOLEAN,
    image:DataTypes.STRING,
    roleID:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};