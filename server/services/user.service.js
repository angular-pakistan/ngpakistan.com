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

  getUserByemail1 : function (email,callback) {
    const query = { email1: email};
    users.findOne(query,callback);
  },

  getUserByemail2 : function (email,callback) {
    const query = { email2: email};
    users.findOne(query,callback);
  },

  login : function (email,password,callback) {
    const query = { 
      email1: email,
      password:password
    };
    users.findOne(query,callback);
  },

  save: function (name, email1, email2, phone1, phone2, dob, github, facebook, twitter, linkedin, password, callback) {
    
        const query = {
          name: name,
          email1: email1,
          email2: email2,
          phone1: phone1,
          phone2:phone2,
          dob: dob,
          github:github,
          facebook:facebook,
          twitter:twitter,
          linkedin:linkedin,
          password:password
        };
        console.log('calling ....user create()');
        users.create(query, callback);
    
    
      }

};
