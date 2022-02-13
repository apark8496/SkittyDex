const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pokedex } = require('../models');
const withAuth = require('../utils/auth');

// get all Pokedex
router.get('/', withAuth, (req, res) => {
    Pokedex.findAll({
      where: {
        userID: req.session.user_id
      },
      attributes: [
        'id',
        'name',
        'types',
        'superEffective',
        'notEffective',
      ],
         })
      .then(PokedexData => {
        const Pokedexs = PokedexData.map(Pokedex => Pokedex.get({ plain: true }));
        res.render('Pokedex', { Pokedexs, logged_in: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;

// TODO:I have no idea if this is the correct method for it show pokemon on the new pokedex page or not