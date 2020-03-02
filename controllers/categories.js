const User = require('../models/user');
const Category = require('../models/category');

module.exports = {
  index,
  create
};

function index(req, res, next) {
    res.render('category/categories', {
      users,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  };

  function create(req, res) {
    Category.create(req.body, function(err, category) {
      res.redirect('/users/categories');
    });
  }