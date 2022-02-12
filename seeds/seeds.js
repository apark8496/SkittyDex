const seedUser = require('./userData');
const seedPost = require('./postData');
const seedComment = require('./commentData');
const seedPokedex = require('./pokeDex');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPost();
  console.log('\n----- POSTS SEEDED -----\n');

  //await seedComments();
  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedPokedex();
  console.log('\n----- Pokedex SEEDED -----\n');

  process.exit(0);
};

seedAll();