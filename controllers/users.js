const User = require('../models/user');

module.exports = {
  index
};

// PLANNED SEARCH FUNCTION

function index(req, res, next) {
  console.log('USER INDEX CONT')
  console.log('REQ.USER: ', req.user)
  // make the query object to use with User.find based up
  // the user has submitted
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // default sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('/index', {
      users,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}