var express = require('express');
var passport = require('passport');
var router = express.Router();
var categoryCtrl = require('../controllers/categories');
const Category = require('../models/category');
const Recipe = require('../models/recipe')

// GET /category
// router.get('/index', categoryCtrl.index);


router.get('/:catName', isLoggedIn, categoryCtrl.index);

router.get('/:catName', isLoggedIn, function(req, res, next) {
  console.log('GET RECIPES NAMES ROUTE')
  Recipe.find({}, function(err, recipes) {
    res.render('category/:catName', {recipes});
  });
})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/');
}

module.exports = router;