var mongoose = require('mongoose');
var user = require('./user');
var Schema = mongoose.Schema;

// create a schema
var articleSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  text: String,
  tags: [String]
});

// create a model using the schema
var Article = mongoose.model('Article', articleSchema);

// expose it to the users
module.exports = Article;