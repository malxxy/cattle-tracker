const sequelize = require('../config/connection');
const seedCattle = require('./cattleData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCattle(); 

  await seedUsers();
  
  process.exit(0);
};

seedAll();