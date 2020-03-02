var express = require('express');
var passport = require('passport');
var router = express.Router();
var categoryCtrl = require('../controllers/categories');
const Category = require('../models/category')

// GET /category
router.get('/index', categoryCtrl.index);

router.get('/:catName', isLoggedIn, function(req, res, next) {
  console.log(req.user)
  console.log(req.params.catName)
  Category.findOne({catName: req.params.catName}, function(err, foundCategory) {
    console.log(foundCategory)
    res.render('category/categories', {user: req.user, firstName: req.givenName, category: foundCategory,  title: 'Category Page'});
  })
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/');
}

module.exports = router;