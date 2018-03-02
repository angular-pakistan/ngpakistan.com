// Models
const users = require('../models/user.model').users

module.exports = {

  getUsers: () => {
    return users.find({}).select('-password').exec()
  },

  getUser: (userID) => {
    const query = { _id: userID }
    return users.findOne(query).select('-password').exec()
  },

  getUserByEmail: (email) => {
    const query = { email }
    return users.findOne(query).select('-password').exec()
  },

  login: (email) => {
    return users.findOne({ email }).exec()
  },

  save: (user) => {
    return users.findOne({ email: user.email }).exec().then(res => {
      if (res) {
        return Promise.reject('User with this email already exists.')
      } else {
        return users.create(user)
          .then((newUser) => {
            newUser.password = newUser.generateHash(user.password)
            return newUser.save()
          })
      }
    })
  }

}
