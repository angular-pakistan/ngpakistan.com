const mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId;

// Models
const users = require('../models/user.model').users;

//////////////////////////
// Export Utilities
//////////////////////////

module.exports ={

  getUsers : function () {
    return users.find({}).exec;
  },

  getUser : function (userID) {
    const query = { _id: userID};
    return users.findOne(query).exec();
  },

  getUserByemail1 : function (email) {
    const query = { email1: email};
    return users.findOne(query).exec();
  },

  getUserByemail2 : function (email) {
    const query = { email2: email};
    return users.findOne(query).exec();
  },

  login : function (email,password) {
    const query = { 
      email1: email,
      password:password
    };
    return users.findOne(query).exec();
  },

  save: function (user) {
    return users.create(user);
  }

};
