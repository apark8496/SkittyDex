const router = require('express').Router();
const { User, Pokedex } = require('../models');
const withAuth = require('../utils/auth');

// get all pokemon from Pokedex
router.get('/', async (req, res) => {
    try {
        const pokedexData = await Pokedex.findAll({
            include: [
                {
                    model: Pokedex,
                    attributes: [
                        'id',
                        'name',
                        'types',
                        'superEffective',
                        'notEffective',
                    ],
                },
            ],
        });

        const pokemon = pokedexData.map((pokedex) =>
            pokedex.get({ plain: true })
        );
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

// router.get('/pokedex/:id', async (req, res) => {
//     try {
//         const pokedexData = await Pokedex.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: pokedex,
//                     attributes: [
//                         'id',
//                         'name',
//                         'types',
//                         'superEffective',
//                         'notEffective',
//                     ],
//                 },
//             ],
//         });

//         const pokedex = pokedexData.get({ plain: true });
//         // Send over the 'loggedIn' session variable to the 'Pokedex' template
//         res.render('pokedex', { pokedex, loggedIn: req.session.loggedIn });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

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
  