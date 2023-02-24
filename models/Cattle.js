const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cattle extends Model {} // class of "cattle" to extend the model class

Cattle.init(
  {
    id: { // cattle number id
      type: DataTypes.INTEGER, // id automatically labeled
      allowNull: false,
      primaryKey: true, // identify as primary key
      autoIncrement: true,
    },
    ranchNum: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ranch',
        key: 'id',
      },
    },
    tagID: {
      type: DataTypes.INTEGER, // tag ID self-entered by user
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vaccine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    fatherID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cattle',
        key: 'tagID',
      },
    },
    motherID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cattle',
        key: 'tagID',
      },
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    currentLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'cattle',
  }
);

module.exports = Cattle;