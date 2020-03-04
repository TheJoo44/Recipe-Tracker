var express = require('express');
var passport = require('passport');
var router = express.Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/index', usersCtrl.index);


/* GET users listing. */
router.get('/', isLoggedIn, function(req, res, next) {
  console.log('GET USERS ROUTES')
  res.render('users/index', {user: req.user, firstName: req.givenName, title: 'Profile Page'});
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/');
}

module.exports = router;
