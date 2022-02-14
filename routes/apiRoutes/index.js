const express = require("express");
const router = express.Router();

router.use(require("./pokeTeamRoutes"));

module.exports = router;
