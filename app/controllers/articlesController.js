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
    var params = [req.params.tags].concat(req.params[0].split('/').slice(1));
    if(!params || params.length == 0) {
        return res.status(400).send({
            message: "Tags can not be empty."
        });
      }
    
    article.find({ tags: { $all: params } }).exec()
    .then(articles => {
        res.send(articles);
      }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while searching for articles."
        });
      });
};

exports.update_article = function(req, res) {
    if(!req.params.articleId) {
        return res.status(400).send({
            message: "Article id can not by empty"
        });
      }

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
   
      article.findOneAndUpdate({_id: req.params.articleId}, req.body, {new: true}).exec()
      .then(article => {
          res.send(article);
        }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while updating the article."
          });
        });
};