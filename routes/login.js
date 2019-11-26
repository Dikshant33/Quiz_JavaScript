'use strict';
var express = require('express');
var router = express.Router();
var passport = require('passport');



//Try to login with passport
router.post('/', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login',
    failureMessage: 'Invalid Login'
}));

module.exports = router;

