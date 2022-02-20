const router = require('express').Router();
const sequelize = require('../config/connection');
const { Team } = require('../models');
const withAuth = require('../utils/auth');

// get all pokemon from Pokedex
router.get('/', withAuth, async (req, res) => {
    try {
        const dbTeamData = await Team.findAll({            
        });

        const team = dbTeamData.map((team) =>
            team.get({ plain: true })            
        );
        console.log(team);
        // Send over the 'loggedIn' session variable to the 'homepage' template
        res.render('pokedex', {
            team,
            logged_in: true,        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id',withAuth, async (req, res) => {
    try {
        const dbTeamData = await Team.findByPk(req.params.id, {
        });

        const pokedex = dbTeamData.get({ plain: true });
        // Send over the 'loggedIn' session variable to the 'Pokedex' template
        res.render('pokedex', { pokedex, logged_in: true, });
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
  
