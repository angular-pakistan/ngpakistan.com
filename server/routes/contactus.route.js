const express = require('express');
const router = express.Router();
const contactUsService = require('../services/contactus.service');
const _ = require('lodash');

router.get('/', function(req, res, next) {

  contactUsService.getAll(function (err,users) {
    if(err){
      throw err;
    }

    res.json({
      href:req.hostname,
      data:users
    })

  })
});

router.get('/:email', function(req, res, next) {
  const email = req.params.email;

  contactUsService.getByEmail(email,function (err,user) {
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
  const email = req.body.email;
  const subject= req.body.subject;
  const message= req.body.message;
  const date= req.body.date;

  contactUsService.save(name, email, subject, message , date,function (err,user) {
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
