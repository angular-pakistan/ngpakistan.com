const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');
const _ = require('lodash');

router.get('/', function(req, res, next) {

  userService.getUsers(function (err,users) {
    if(err){
      throw err;
    }

    res.json({
      href:req.hostname,
      data:users
    })

  })
});

router.get('/:ID', function(req, res, next) {
  var userID = req.params.ID;

  userService.getUser(userID,function (err,user) {
    if(err){
      throw err;
    }

    res.json({
      href:req.hostname ,
      data:user
    })

  })
});

router.get('/username/:username', function(req, res, next) {
  var username = req.params.username;

  userService.getUserByUsername(username,function (err,user) {
    if(err){
      throw err;
    }

    res.json({
      href:req.hostname ,
      data:user
    })

  })
});


module.exports = router;
