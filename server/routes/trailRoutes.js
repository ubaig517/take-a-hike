const express = require('express');
const router = express.Router();

// trailController Middleware
const { getTrails, getTrailById, addTrail, deleteTrail } = require('../controller/trailController');

router.get('/', getTrails);

router.get('/:id', getTrailById);

router.post('/', addTrail);

router.delete('/:id', deleteTrail);

module.exports = router;