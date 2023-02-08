const sequelize = require('../config/connection');
const { Cattle } = require('../models');

const cattleData = require('./cattleData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Cattle.bulkCreate(cattleData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();