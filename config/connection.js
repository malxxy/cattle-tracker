const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  // process.env.DB_NAME,
  // process.env.DB_USER,
  // process.env.DB_PASSWORD,
  DB_NAME='heroku_cda25d35d22a229',
  DB_PASSWORD='6e246bbc',
  DB_USER='b14d129264f667',


  {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;