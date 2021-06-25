var express = require('express');
var router = express.Router();


router.get('cookies/users', (_, response, next) => {
    const username = 'A user from the cookie!'
    response.cookie('users', username)
    response.end();
});

module.exports = router;