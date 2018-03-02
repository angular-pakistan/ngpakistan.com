const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const userService = require('../services/user.service');
const secret = process.env.SECRET || 'tasmanianDevil';
const isAdmin = require('../middlewares/is-admin.middleware').isAdmin;
const config = require('../config/config.js');
const mailingService = require('../services/mailing.service');
var Chance = require('chance');
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
      const chance = new Chance();
      const token = chance.word({length: 16});
      user.token = token;
      mailingService.sendVerificationMail(user.email, user.name, token)
      .then((body) => {
        console.log(body);
        console.log('Successfully sent!');
        res.json({success: true, token});
      })
      .catch((err) => {
        console.log(err);
        res.json({success: true, token, error: 'Invalid email address, please check.'});
      });
      user.save();
    })
    .catch(err => {
      if(err)
        res.json({ success: false, error: err });
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
            var payload = {id: user.id, name: user.name};
            if (user.admin) {
              payload.admin = true;
            }
            var token = jwt.sign(payload, secret, { expiresIn: '7d'});
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

router.get('/verify', (req, res) => {
  const email = req.query.email;
  const token = req.query.token;

  userService.getUserByEmail(email).then(user => {
    if(user){
      if(user.verified){
        res.json({success: false});
      } else {
        if(user.token === token) {
          user.verified = true;
          user.save();
          res.json({success: true});
        } else {
          res.json({success: false});
        }
      }
    } else {
      res.sendStatus(404)
    }
  }).catch(err => res.json(err));
})

module.exports = router;
