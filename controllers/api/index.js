const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');
const pokemonRoutes = require('./pokemon-routes.js');


router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comments', commentRoutes);
router.use('./pokemon', pokemonRoutes)

module.exports = router;