const sequelize = require('../config/connection');
const seedCattle = require('./cattleData');
const seedUsers = require('./userData');
const seedRanches = require('./ranchData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCattle(); 

  await seedUsers();

  await seedRanches();
  
  process.exit(0);
};

seedAll();