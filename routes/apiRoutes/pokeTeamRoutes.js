const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// originally app.get('/api/candidates')
router.get("/pokeTeamData", (req, res) => {});

// originally app.get('/api/candidate/:id')
router.get("/pokeTeamData/:id", (req, res) => {});

// originally app.post('/api/candidate')
router.post("/pokeTeamData", ({ body }, res) => {});

// originally app.put('/api/candidate/:id')
router.put("/pokeTeamData/:id", (req, res) => {});

// originally app.delete('/api/candidate/:id')
router.delete("/pokeTeamData/:id", (req, res) => {});

module.exports = router;
