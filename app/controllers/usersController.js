'use strict';

var mongoose = require('mongoose'),
usersModel = mongoose.model('User');
exports.list_all_users = function(req, res) {
  usersModel.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.create_user = function(req, res) {
  // Validate request
  if(!req.body.name) {
    return res.status(400).send({
        message: "User name can not be empty"
    });
  }

  // Create a user
  const user = new usersModel({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name , 
    avatar: req.body.avatar
  });

  // Save user in the database
  user.save()
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the user."
    });
  });

};