var router = require('express').Router();
var passport = require('passport');
var usersCtrl = require('../controllers/users');

router.get('/index', isLoggedIn, usersCtrl.index);

/* GET login page. */
router.get('/', function(req, res) {
  res.render('index', { user: req.user, firstName: req.givenName, title: 'Recipe Tracker(working title)' });
});

//  Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/users',
    failureRedirect: '/'
  }
));

// OAuth Logout route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
