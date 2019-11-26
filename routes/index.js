'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

/*GET about page and send it to server */
router.get('/login', function (req, res, next) {
    res.render('login', { title: 'login' });
});

/*router.get('/login', function (req, res, next) {
    res.render('login', { title: 'Login' });
});*/

router.get('/register', function (req, res, next) {
    res.render('register', { title: 'Register' });
});

module.exports = router;
