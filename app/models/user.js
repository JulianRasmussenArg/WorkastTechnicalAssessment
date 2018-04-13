var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-type-url');

// create a schema
var userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  avatar: mongoose.SchemaTypes.Url
});

// create a model using the schema
var User = mongoose.model('User', userSchema);

// expose it to the users
module.exports = User;