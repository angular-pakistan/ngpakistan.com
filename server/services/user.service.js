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
    return users.find({}).select('-password').exec();
  },

  getUser : (userID) => {
    const query = { _id: userID};
    return users.findOne(query).select('-password').exec();
  },

  login : (email,password) => {
    const query = { 
      email1: email,
      password:password
    };
    return users.findOne(query).exec();
  },

  save: (user) => {
    return users.findOne({ name: user.name }).exec().then(res => {
      if (res) {
        return Promise.reject('User already exists');
      } else {
        return users.create(user)
        .then((newUser) => {
          newUser.password = newUser.generateHash(user.password);
          return newUser.save();
        })
      }
    });
  }

};
