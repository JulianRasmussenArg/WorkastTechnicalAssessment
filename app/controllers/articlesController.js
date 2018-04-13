'use strict';

var mongoose = require('mongoose'),
articlesModel = mongoose.model('Article');
exports.list_all_users = function(req, res) {
  articlesModel.find()
    .then(articles => {
        res.send(articles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving articles."
        });
    });
};

exports.create_article = function(req, res) {
  // Validate request
  if(!req.body.title) {
    return res.status(400).send({
        message: "Article title can not be empty"
    });
  }

  if(!req.body.userId) {
    return res.status(400).send({
        message: "Article userId can not be empty"
    });
  }

  if(!req.body.text) {
    return res.status(400).send({
        message: "Article text can not be empty"
    });
  }

  // Create an article
  const article = new articlesModel({
    userId: req.body.userId,
    title: req.body.title,
    text: req.body.text,
    tags: req.body.tags    
  });

  // Save Note in the database
  article.save()
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the article."
    });
  });

};

exports.get_articles_by_tag = function(req, res) {
    if(!req.body.tags || req.body.tags.length == 0) {
        return res.status(400).send({
            message: "Tags can not be empty."
        });
      }
    
    article.find({ tags: { $all: req.body.tags } }).exec()
    .then(articles => {
        res.send(articles);
      }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while searching for articles."
        });
      });
};