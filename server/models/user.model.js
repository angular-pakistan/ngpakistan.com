//////////////////////////
// Requires
//////////////////////////

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId
  , bcrypt   = require('bcrypt-nodejs');


//////////////////////////
// Schema
//////////////////////////

var usersModel = Schema({
  name: String,
  email: String,
  phone: String,
  github: String,
  password:String,
  admin: Boolean
});

// methods ======================
// generating a hash
usersModel.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
usersModel.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

//////////////////////////
// Export Schema
//////////////////////////

const users = mongoose.model('users',usersModel);
module.exports.users = users;
