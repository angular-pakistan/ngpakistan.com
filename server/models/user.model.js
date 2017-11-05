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
  name: [String],
  email1: [String],
  email2: String,
  phone1: String,
  phone2:String,
  dob: String,
  github: String,
  facebook:String,
  twitter:String,
  linkedin:String,
  password:String
});


//////////////////////////
// Export Schema
//////////////////////////

const users = mongoose.model('users',usersModel);
module.exports.users = users;
