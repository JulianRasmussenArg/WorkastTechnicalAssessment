var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-type-url');

// create a schema
var userSchema = new Schema({
  name: String,
  avatar: mongoose.SchemaTypes.Url
});

// create a model using the schema
var User = mongoose.model('User', userSchema);

// expose it to the users
module.exports = User;