const mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId;

// Models
const contact = require('../models/contactus.model').contactus;

//////////////////////////
// Export Utilities
//////////////////////////

module.exports ={

  getAll : () => {
    return contact.find({}).exec();
  },


  getByEmail : (email) => {
    const query = { email: email};
    return contact.findOne(query).exec();
  },

  save: (obj) => {
    console.log(obj)
    return contact.create(obj);
  }

};
