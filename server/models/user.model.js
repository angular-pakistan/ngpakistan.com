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
  _id: ObjectId,
  cell: [String],
  email: [String],
  company: String,
  institute: String,
  dob:String,
  city: String,
  referrer: String,
  username:String,
  password:String
});


//////////////////////////
// Export Schema
//////////////////////////

const users = mongoose.model('users',usersModel);
module.exports.users = users;
