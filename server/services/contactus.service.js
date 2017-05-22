const mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId;

// Models
const contact = require('../models/contactus.model').contactus;

//////////////////////////
// Export Utilities
//////////////////////////

module.exports ={

  getAll : function (callback) {
    contact.find({},callback);
  },


  getByEmail : function (email,callback) {
    const query = { email: email};
    contact.findOne(query,callback);
  },

  save: function (name, email, subject, message, date, callback) {

    const query = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      date: date,
    };
    console.log('calling ....contact create()');
    contact.create(query, callback);


  }

};
