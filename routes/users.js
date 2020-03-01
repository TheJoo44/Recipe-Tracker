var express = require('express');
var passport = require('passport');
var router = express.Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/users', usersCtrl.index);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/index', {user: req.user, firstName: req.givenName, title: 'Profile Page'});
});

module.exports = router;
