'use strict';
const { STRING } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Page.init({
    token:DataTypes.STRING,
    name:DataTypes.STRING,
    fan_count:DataTypes.STRING,
    status: DataTypes.STRING,
    mess_count: DataTypes.STRING,
    image:DataTypes.Te,
    id_admin: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Page',
  });
  return Page;
};