const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cattle extends Model {}

Cattle.init(
  {

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'cattle',
  }
);

module.exports = Post;
