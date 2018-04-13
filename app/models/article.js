var mongoose = require('mongoose');
var user = require('user');
var Schema = mongoose.Schema;

// create a schema
var articleSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: user._id,
  title: String,
  text: String,
  tags: [String]
});

// create a model using the schema
var Article = mongoose.model('Article', articleSchema);

// expose it to the users
module.exports = Article;