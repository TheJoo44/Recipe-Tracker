var express = require('express');
var router = express.Router();
var recipeCtrl = require('../controllers/recipes');
const Recipe = require('../models/recipe');

// GET /recipe
router.get('/:catName', recipeCtrl.index);
router.get('/:catName/newrecipes', isLoggedIn, recipeCtrl.new);
router.post('/:catName/recipes', isLoggedIn, recipeCtrl.create);
router.get('/:catName/:recName', isLoggedIn, recipeCtrl.show);
router.delete('/:catName/:recName/:id', isLoggedIn, recipeCtrl.delete);
router.put('/:catName/:recName/:id', isLoggedIn, recipeCtrl.update);


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/');
}

module.exports = router;