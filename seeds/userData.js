const { User } = require('../models');

const userData =[ 
    {
      "username": "Ashley",
      "email": "adu96@email.com",
      "password": "Password01"
    },
    {
      "username": "Jun",
      "email": "Jun@gmail.com",
      "password": "Password02"
    },
    {
      "username": "momo",
      "email": "momo@gmail.com",
      "password": "Password03"
    },
    {
      "username": "miko",
      "email": "miko@gmail.com",
      "password": "Password04"
    },
    {
      "username": "courtney",
      "email": "courtney@gmail.com",
      "password": "Password05"
    }
  ]

  const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  module.exports = seedUser;
