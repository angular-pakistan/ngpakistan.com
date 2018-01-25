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
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true,
    trim: true
  },
});


//////////////////////////
// Export Schema
//////////////////////////

const contactus = mongoose.model('contactus',contactUsModel);
module.exports.contactus = contactus;
