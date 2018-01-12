const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');
const _ = require('lodash');

router.get('/', (req, res, next) => {

  userService.getUsers()
    .then((users) => res.json({
                        href: req.hostname,
                        data: users
                      }))
    .catch(err => {throw err;});
});

router.get('/:ID', (req, res, next) => {
  var userID = req.params.ID;

  userService.getUser(userID)
    .then((user) => res.json({
                        href: req.hostname,
                        data: user
                      }))
    .catch(err => {throw err;});
});

router.get('/email/:email', (req, res, next) => {
  var username = req.params.email;

  userService.getUserByUsername(username)
    .then((user) => res.json({
                        href: req.hostname,
                        data: user
                      }))
    .catch(err => {throw err;});
});

router.post('/', (req, res, next) => {
  
    const name = req.body.name;
    const email1 = req.body.email1;
    const email2= req.body.email2;
    const phone1= req.body.phone1;
    const phone2= req.body.phone2;
    const dob= req.body.dob;
    const github= req.body.github;
    const facebook= req.body.facebook;
    const twitter= req.body.twitter;
    const linkedin= req.body.linkedin;
    const password= req.body.password;
  
    const user = {
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
    userService.save(user)
      .then((user) => res.json({
                          href: req.hostname,
                          data: user
                        }))
      .catch(err => {throw err;});
  });

  router.post('/login', (req, res, next) => {
    
    const email = req.body.email;
    const password = req.body.password;
  
    userService.login(email, password)
      .then((user) => res.json({
                          href: req.hostname,
                          data: user
                        }))
      .catch(err => {throw err;});
      });

module.exports = router;
