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

router.post('/', (req, res, next) => {
  
    const {
      name,
      email,
      phone,
      github,
      password
    } = req.body;

    const user = {
      name,
      email,
      phone,
      github,
      password
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
