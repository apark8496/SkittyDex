const seedUser = require('./userData');
const seedPost = require('./postData');
const seedComment = require('./commentData');
const seedPokedex = require('./pokedexData');
const seedPoke = require('./pokeData');
const seedTeam = require('./teamData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USERS SEEDED -----\n');

  const posts = await Post.bulkCreate(postData);
  console.log('\n----- POSTS SEEDED -----\n');

  //await seedComments();
  const comments = await Comment.bulkCreate(commentData);
  console.log('\n----- COMMENTS SEEDED -----\n');

  const pokemon = await Pokedex.bulkCreate(pokedexData);
  console.log('\n----- POKEMON SEEDED -----\n');

  await seedPoke();
  console.log('\n----- Poke SEEDED -----\n');

  await seedTeam();
  console.log('\n----- Team SEEDED -----\n');



  process.exit(0);
};

seedAll();