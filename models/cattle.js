const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cattle extends Model {}

Cattle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'cattle',
  }
);

module.exports = Cattle;