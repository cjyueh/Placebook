var User = require('../models/User');

var usersController = {
  //GET all users
  getAll: function(req, res) {
    User.find({}, function(err, users) {
      err ? console.log(err) : res.json(users);
    });
  },
  //POST to create new users
  createUser: function(req, res) {
    var username = req.body.username;
    var hometown = req.body.hometown;
    var coordinates = req.body.location;
    User.create({username: username, hometown: hometown, location: coordinates}, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  }
};

module.exports = usersController;