'use strict';
var express = require('express');
var router = express.Router();
var Account = require('../models/account');



/* Make Account. */
router.post('/', function (req, res) {
    Account.create({
        username: req.body.username,
        password: req.body.password
    }, function (err, Account) {
        if (err) console.log(err);
        else {
            console.log('User added : ' + Account);
            res.redirect('/');
        }
    });
});



module.exports = router;
