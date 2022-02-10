const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const teamRoutes = require('./post-routes.js');


router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/team', teamRoutes)

module.exports = router;