var express = require('express');
var router = express.Router();



router.get('/', (req, res, next) => {
    console.log(req.cookies)
    res.send(`Hello ${req.cookies.firstName} ${req.cookies.lastName}`)
    res.end();
});

module.exports = router;