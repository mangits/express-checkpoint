var express = require('express');
var router = express.Router();
const movies = require('../movies.json')


router.get('/', (req, res, next) => {
    res.send(movies)
})

module.exports = router;