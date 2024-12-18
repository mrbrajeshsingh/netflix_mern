const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const { getMovies, getMovie } = require('../controllers/movie.controller');

// Protected routes - require authentication
router.use(protect);

router.get('/', getMovies);
router.get('/:id', getMovie);

module.exports = router;
