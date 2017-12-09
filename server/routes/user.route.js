const express = require('express');
const jwt = require('jsonwebtoken');
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

router.get('/email/:email', function(req, res, next) {
  var username = req.params.email;

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

router.post('/', function(req, res, next) {
  
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
  
    userService.save(name, email1, email2, phone1, phone2, dob, github, facebook, twitter, linkedin, password,function (err,user) {
      if(err){
        throw err;
      }
  
      res.json({
        href:req.hostname ,
        data:user
      })
  
    })
  });

  router.post('/login', function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    
    userService.login(email, password,function (err,user) {
      if(err){
        
        throw err;
        
      }else{
        if(user){
          const payload = {
            user: user 
          };
          
          var token = jwt.sign(payload,'superSecret', {
            expiresIn: 1440 // expires in 24 hours
          });
          
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
          
        }else{
          res.json({
            success: false,
            message: 'failed to authenticate, invalid email or password',
            token: null
          });
        }
      }
    })

    });

module.exports = router;
