const User = require('../models/user');
const Category = require('../models/category');
const Recipe = require('../models/recipe');

module.exports = {
  index,
  create
};

function index(req, res, next) {
  console.log('CATEGORIES INDEX CONTROLLER')
  Category.findOne({catName: req.params.catName}, function(err, foundCategory) {
    Recipe.find({category: foundCategory.id}, function(err, recipes){
      // console.log('FOUND CATEGORY', foundCategory, recipes)
      res.render('category/categories', {user: req.user, firstName: req.givenName, category: foundCategory, recipes, title: 'Category Page'});
      // next()
    });
  })
};

  function create(req, res) {
    Console.log('CATEGORIES CREATE CONTROLLER')
    Category.create(req.body, function(err, category) {
      res.redirect('/users/categories');
    });
  }