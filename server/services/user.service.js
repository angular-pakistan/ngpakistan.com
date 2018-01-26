const mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId;

// Models
const users = require('../models/user.model').users;

//////////////////////////
// Export Utilities
//////////////////////////

module.exports ={

  getUsers : () => {
    return users.find({}).exec;
  },

  getUser : (userID) => {
    const query = { _id: userID};
    return users.findOne(query).exec();
  },

  login : (email,password) => {
    const query = { 
      email1: email,
      password:password
    };
    return users.findOne(query).exec();
  },

  save: (user) => {
    return users.create(user);
  }

};
