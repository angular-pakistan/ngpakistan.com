//////////////////////////
// Requires
//////////////////////////

const mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId;


//////////////////////////
// Schema
//////////////////////////

const contactUsModel = Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  date: String
});


//////////////////////////
// Export Schema
//////////////////////////

const contactus = mongoose.model('contactus',contactUsModel);
module.exports.contactus = contactus;
