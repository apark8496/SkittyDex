const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');
const teamRoutes = require('./team-routes');
const pokemonRoutes = require('./pokemon-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/teams', teamRoutes);
router.use('/pokemon', pokemonRoutes);

module.exports = router;