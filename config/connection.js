const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  
  // "heroku_cda25d35d22a229",
  // "b14d129264f667",
  // "6e246bbc",

  // mysql://b7a05bbcbdfd49:0599abe1@us-cdbr-east-06.cleardb.net/heroku_a1232fe8256e5f5?reconnect=true

  {
  //   host: "us-cdbr-east-06.cleardb.net",
    // host: "127.0.0.1",
    host: "us-cdbr-east-06.cleardb.net",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
