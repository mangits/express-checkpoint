var express = require('express');
var router = express.Router();

router.get('/', (req, next) => {
    let firstName = req.query.firstName
    let lastName = req.query.lastName
        (firstName && lastName) ?
        res.setCookie('name', [firstName, lastName])
            .send(`Set cookie for ${firstName}`)
        : res.send('Use both firstName and lastName query.')
    next()
})

module.exports = router;