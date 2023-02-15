const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  // process.env.DB_NAME,
  // process.env.DB_USER,
  // process.env.DB_PASSWORD,
  
  "heroku_cda25d35d22a229",
  "b14d129264f667",
  "6e246bbc",

  {
    host: "us-cdbr-east-06.cleardb.net",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
