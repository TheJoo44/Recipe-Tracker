var express = require('express');
var router = express.Router();
var recipeCtrl = require('../controllers/recipes');
const Recipe = require('../models/recipe');

// GET /recipe
router.get('/:catName', recipeCtrl.index);
router.get('/:catName/newrecipes', isLoggedIn, recipeCtrl.new);
router.post('/:catName/recipes', isLoggedIn, recipeCtrl.create);
router.get('/:catName/:recName', isLoggedIn, recipeCtrl.index);
// router.get('/:catName/:recName', isLoggedIn, recipeCtrl.show);

router.get('/:recName', isLoggedIn, function(req, res, next) {
  console.log('GET RECIPES NAMES ROUTE')
  console.log(req.params.recName)
  Recipe.findOne({recName: req.params.recName}, function(err, foundRecipe) {
    res.render('recipes/recipes', {user: req.user, firstName: req.givenName, recipe: foundRecipe,  title: 'Recipe Page'});
  })
})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/');
}

module.exports = router;