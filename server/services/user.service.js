const mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId;

// Models
const users = require('../models/user.model').users;

//////////////////////////
// Export Utilities
//////////////////////////

module.exports ={

  getUsers : function (callback) {
    users.find({},callback);
  },

  getUser : function (userID,callback) {
    const query = { _id: userID};
    users.findOne(query,callback);
  },

  getUserByUsername : function (username,callback) {
    const query = { username: username};
    users.findOne(query,callback);
  }

};
