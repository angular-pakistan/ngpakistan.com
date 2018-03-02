// load all the things we need
var passportJWT = require('passport-jwt')
var ExtractJwt = passportJWT.ExtractJwt
var JwtStrategy = passportJWT.Strategy

// configure strategy options
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
jwtOptions.secretOrKey = process.env.SECRET || 'tasmanianDevil'
jwtOptions.usernameField = 'email'
jwtOptions.passwordField = 'password'

// Models
const User = require('../models/user.model').users

// expose this function to our app using module.exports
module.exports = (passport) => {
  passport.use(new JwtStrategy(
    jwtOptions,
    (jwtPayload, done) => {
      User.findById(jwtPayload.id, (err, user) => {
        // if there are any errors, return the error before anything else
        if (err) { return done(err) }

        // if no user is found, return the message
        if (!user) { return done(null, false) }

        // all is well, return successful user
        return done(null, user)
      })
    }
  ))
}
