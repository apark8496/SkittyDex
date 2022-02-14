const router = require('express').Router();
const { Pokedex } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try{
        const pokedex = await Pokedex.findAll();
        res.json(pokedex);
    }
    catch(err){
        res.status(500).json(err);
    }
    
  });

  module.exports = router;