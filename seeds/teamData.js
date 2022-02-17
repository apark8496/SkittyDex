const { Team } = require('../models');

const teamData = [
    {
      "name": "Looking for an Umbreon",
       "userID": 1,
       "pokeID": [8,12,36,4,7,1]
 
    },

    {
      "name": "Behold, a team of shinies",
      "userID": 3,
      "pokeID": [7,11,32,5,19,11]
    },
    {
      "name": "",
      "userID": 2,
      "pokeID": [4,2,6,4,10,31]
    }
  ]
  
  const seedTeam = () => Team.bulkCreate(teamData);
  
  module.exports = seedTeam;