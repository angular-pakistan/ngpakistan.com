const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const userService = require('../services/user.service');
const secret = 'tasmanianDevil';
const isAdmin = require('../middlewares/is-admin.middleware').isAdmin;
// Models
const User = require('../models/user.model').users;

router.get('/', passport.authenticate('jwt', { session: false }), isAdmin, (req, res, next) => {

  userService.getUsers()
    .then((users) => res.json({
                        href: req.hostname,
                        data: users
                      }))
    .catch(err => {throw err;});
});

router.get('/id/:ID', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  var userID = req.params.ID;

  userService.getUser(userID)
    .then((user) => res.json({
                        href: req.hostname,
                        data: user
                      }))
    .catch(err => {throw err;});
});

router.post('/', (req, res, next) => {
  const {
    name,
    email,
    phone,
    github,
    password
  } = req.body;
  const user = {name,email,phone,github,password};
  userService.save(user)
    .then((user) => {
      var payload = {id: user._id};
      var token = jwt.sign(payload, secret, { expiresIn: '24h'});
      res.json({success: true, token: 'bearer ' + token});
    })
    .catch(err => {
      if(err)
        res.json(err);
    })
});

router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }, (err, user) => {
    if(!user){
      console.log('user not found!')
      res.sendStatus(401);
    } else {
      console.log('imhere')
      if(user.validPassword(password)){
        var payload = {id: user.id};
        if(user.admin)
          payload.admin = true;
        var token = jwt.sign(payload, secret, { expiresIn: '24h'});
        res.json({success: true, token: 'bearer ' + token});
      } else {
        res.sendStatus(401);
      }
    }
  })
});

router.post('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.sendStatus(200);
});


router.get('/lala', passport.authenticate('jwt', { session: false }), isAdmin, (req, res) => {
  console.log('yay!');
  res.json('Success!')
});

module.exports = router;
