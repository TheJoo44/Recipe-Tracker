// const User = require('../models/user');
const Category = require('../models/category');
const Recipe = require('../models/recipe');

module.exports = {
  index,
  create
};

function index(req, res) {
  console.log('CATEGORIES CTRL INDEX')
  Category.findOne({catName: req.params.catName}, function(err, foundCategory) {
    Recipe.find({category: foundCategory.id}).sort('name').exec(function(err, recipes){
      res.render('category/categories', {user: req.user, firstName: req.givenName, category: foundCategory, recipes, title: 'Category Page'});
    });
  })
};

  function create(req, res) {
    Console.log('CATEGORIES CTRL CREATE')
    Category.create(req.body, function(err, category) {
      res.redirect('/users/categories');
    });
  }