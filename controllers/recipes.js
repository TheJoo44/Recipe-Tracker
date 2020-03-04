const User = require('../models/user');
const Recipe = require('../models/recipe');
const Category = require('../models/category');

module.exports = {
  index,
  create,
  new: newRecipe,
  show
};

function show(req, res) {
    console.log('GET RECIPE ROUTE')
    console.log(req.params)
    Recipe.findOne({name: req.params.recName}, function(err, recipe) {
      console.log(recipe)
      res.render('recipes/recipes', {user: req.user, firstName: req.givenName, recipe, title: 'Recipe Page'});
    })
  };

function index(req, res) {
  console.log('RECIPES INDEX PAGE')
  res.render('recipes/recipes', {users, user: req.user, name: req.query.name, recipes, catName: req.params.catName, foundCategory, title: 'Recipe Page'
  });
};

  function create(req, res) {
    console.log('RECIPES CREATE CONTROLLER')
    // User.findOne({userId: profile.id}, function(err, foundUser) {
      Category.findOne({catName: req.params.catName}, function(err, foundCategory) {
  // week 4 day 5 for array splitting movies.js controller
        
          const recipe = new Recipe({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            userId: req.user.id,
            category: foundCategory.id
          });
          recipe.save(function(err) {
            foundCategory.recipes.push(recipe._id)
            if (err) return res.render('/recipes/newrecipes');
            console.log('3', recipe);
            console.log('4', foundCategory);
            if(err) console.log(err)
            // console.log('5', foundUser);
            res.redirect(`/users/categories/${req.params.catName}`);
      })}
    )};

  function newRecipe(req, res) {
    console.log('RECIPES NEWRECIPE CONTROLLER')
      Category.findOne({catName: req.params.catName}, function(err, foundCategory) {
      res.render('recipes/newrecipes', {user: req.user, firstName: req.givenName, catName: req.params.catName, foundCategory, title: 'New Recipe Page'})
  })};