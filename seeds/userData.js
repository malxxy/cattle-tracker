const { User } = require('../models');

const userdata = [
    {
      "name": "Maislinn",
      "email": "Maislinn@mail.com",
      "password": "password12345"
    },
    {
      "name": "Malia",
      "email": "Malia@mail.com",
      "password": "password12345"
    },
    {
      "name": "Josh",
      "email": "Josh@mail.com",
      "password": "password12345"
    },
    {
      "name": "Lexi",
      "email": "Lexi@mail.com",
      "password": "password12345"
    },
  ];

  const seedUsers = () => User.bulkCreate(userdata);

  module.exports = seedUsers;