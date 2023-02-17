const { User } = require('../models');

const userdata = [
    {
      name: "Maislinn",
      email: "Maislinn@mail.com",
      password: "password12345",
      ranchNum: 4,
    },
    {
      name: "Malia",
      email: "Malia@mail.com",
      password: "password12345",
      ranchNum: 4,
    },
    {
      name: "Josh",
      email: "Josh@mail.com",
      password: "password12345",
      ranchNum: 4,
    },
    {
      name: "Lexi",
      email: "Lexi@mail.com",
      password: "password12345",
      ranchNum: 4,
    },
  ];

  const seedUsers = () => User.bulkCreate(userdata
    , {
      individualHooks: true,
      returning: true,
    });

  module.exports = seedUsers;