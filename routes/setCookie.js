var express = require('express');
var router = express.Router();
var cookie = require('cookie')

router.get('/', (req, res, next) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    if (firstName && lastName) {
        res.cookie('firstName', firstName)
        res.cookie('lastName', lastName)
                .send(`Set cookie for ${firstName} ${lastName}`)
    } else { res.send('Set firstName &&lastName parameter') }
    next()
})

module.exports = router;