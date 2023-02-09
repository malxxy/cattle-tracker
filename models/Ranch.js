const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ranch extends Model {}

Ranch.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: false,
        modelName: 'ranch',
      }
);

module.exports = Ranch;