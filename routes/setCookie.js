var express = require('express');
var router = express.Router();
var cookie = require('cookie')

router.get('/', (req, res, next) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    (firstName) ?
        res.cookie('firstName', firstName)
            .send(`Set cookie for ${firstName}`)
        : (lastName) ?
            res.cookie('lastName', lastName)
                .send(`Set cookie for ${lastName}`)
            : res.send('Set lastName parameter')
    next()
})

module.exports = router;