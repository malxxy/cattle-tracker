const sequelize = require('../config/connection');
const { Cattle } = require('../models');

const cattleData = require('./cattleData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Cattle.bulkCreate(cattleData, {
    individualHooks: true,
    returning: true,
  });

  for (const cattle of cattleData) {
    await cattle.create({
      ...cattle,
      cattle_id: cattle[Math.floor(Math.random() * cattle.length)].id,
    });
  }


  process.exit(0);
};

seedDatabase();