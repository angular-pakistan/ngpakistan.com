const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const userService = require('../services/user.service');
const secret = process.env.SECRET || 'tasmanianDevil';
const isAdmin = require('../middlewares/is-admin.middleware').isAdmin;
var api_key = 'key-c0515d395d6d5188df64af9c2f783194';
var DOMAIN = 'sandbox171d4d23ca894d458d322157f279255a.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});
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
      var data = {
        from: 'Angular Pakistan <no-reply@ngpakistan.com>',
        to: user.email,
        subject: 'Verify your account',
        text: `Dear ${user.name},\nClick on the following link to verify your account: http://localhost:4200/#/verify/${user._id}`
      };
      mailgun.messages().send(data, function (error, body) {
          if(error){
              console.log(error);
              res.json({success: false, error: error});
          }
          console.log(body);
          console.log('Successfully sent!');
          res.json({success: true});
      });
    })
    .catch(err => {
      if(err)
        res.json({ error: err });
    })
});

router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  userService.login(email)
    .then(user => {
      if(!user){
        res.json({error: 'Invalid username or password.'});
      } else {
        if (user.validPassword(password)) {
          if (user.verified) {
            var payload = {id: user.id};
            if (user.admin) {
              payload.admin = true;
            }
            var token = jwt.sign(payload, secret, { expiresIn: '24h'});
            res.json({success: true, token: 'bearer ' + token});
          } else {
            res.json({error: `Your email hasn't been verified yet.
            \nCheck your email, we've sent you a verification link.`});
          }
        } else {
          res.json({error: 'Invalid username or password.'});
        }
      }
    })
    .catch(err => res.json({error: err}))
});

router.post('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.sendStatus(200);
});

router.get('/verify/:id', (req, res) => {
  const id = req.params.id;

  userService.getUser(id).then(user => {
    if(user){
      if(user.verified){
        res.json({success: false});
      } else {
        user.verified = true;
        user.save();
        res.json({success: true});
      }
    } else {
      res.sendStatus(404)
    }
  }).catch(err => res.json(err));
})

module.exports = router;
