const mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId;

// Models
const contact = require('../models/contactus.model').contactus;

//////////////////////////
// Export Utilities
//////////////////////////

module.exports ={

  getAll : function () {
    return contact.find({}).exec();
  },


  getByEmail : function (email) {
    const query = { email: email};
    return contact.findOne(query).exec();
  },

  save: function (contact) {
    return contact.create(contact);
  }

};
