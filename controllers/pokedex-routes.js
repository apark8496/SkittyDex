const router = require('express').Router();
const { Pokedex } = require('../models');
const withAuth = require('../utils/auth');

// get all pokemon from Pokedex
router.get('/', withAuth, (req, res) => {
    try {
        const dbPokedexData = await Pokedex.findAll({            
        });

        const pokemon = dbPokedexData.map((pokedex) =>
            pokedex.get({ plain: true })            
        );
        console.log(pokemon);
        // Send over the 'loggedIn' session variable to the 'homepage' template
        res.render('pokedex', {
            pokemon,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dbPokedexData = await Pokedex.findByPk(req.params.id, {
        });

        const pokedex = dbPokedexData.get({ plain: true });
        // Send over the 'loggedIn' session variable to the 'Pokedex' template
        res.render('pokedex', { pokedex, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login route
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });
  
  module.exports = router;
  