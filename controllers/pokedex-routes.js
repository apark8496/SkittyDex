const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pokedex } = require('../models');
const withAuth = require('../utils/auth');


