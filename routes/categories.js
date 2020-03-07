var express = require('express');
var passport = require('passport');
var router = express.Router();
var categoryCtrl = require('../controllers/categories');
const Recipe = require('../models/recipe')



router.get('/:catName', isLoggedIn, categoryCtrl.index);

router.get('/:catName', isLoggedIn, function(req, res, next) {
  Recipe.find({}, function(err, recipes) {
    res.render('category/:catName', {recipes});
  });
})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/');
}

module.exports = router;