const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

router.get('/movie', controllers.movie)
router.get('/movie/upcoming', controllers.upcoming)
router.get('/movie/:id', controllers.getMovieById)

module.exports = router