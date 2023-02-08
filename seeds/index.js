const sequelize = require('../config/connection');
// const { Cattle } = require('../models');
const seedCattle = require('./cattleData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCattle(); 
  
  process.exit(0);
};

seedAll();