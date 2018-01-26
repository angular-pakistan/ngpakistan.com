//////////////////////////
// Requires
//////////////////////////

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId;


//////////////////////////
// Schema
//////////////////////////

var usersModel = Schema({
  name: String,
  email: String,
  phone: String,
  github: String,
  password:String
});


//////////////////////////
// Export Schema
//////////////////////////

const users = mongoose.model('users',usersModel);
module.exports.users = users;
