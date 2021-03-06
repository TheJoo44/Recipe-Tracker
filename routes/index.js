var router = require('express').Router();
var passport = require('passport');


/* GET login page. */
router.get('/', function(req, res) {
  res.render('index', { user: req.user, firstName: req.givenName, title: 'Community Cookbook' });
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


module.exports = router;
