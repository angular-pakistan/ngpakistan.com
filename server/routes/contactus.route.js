const express = require('express');
const router = express.Router();
const contactUsService = require('../services/contactus.service');
const _ = require('lodash');

router.get('/', (req, res, next) => {

  contactUsService.getAll()
    .then((contacts) => res.json({
                        href: req.hostname,
                        data: contacts
                      }))
    .catch(err => {throw err;});
});

router.get('/:email', (req, res, next) => {
  const email = req.params.email;

  contactUsService.getByEmail(email)
    .then((contact) => res.json({
                        href: req.hostname,
                        data: contact
                      }))
    .catch(err => {throw err;});
});

router.post('/', (req, res, next) => {

  const name = req.body.name;
  const email = req.body.email;
  const subject= req.body.subject;
  const message= req.body.message;
  const date= req.body.date;

  const contactUs = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      date: date,
    };
  contactUsService.save(contactUs)
    .then((contact) => res.json({
                        href: req.hostname,
                        data: contact
                      }))
    .catch(err => {throw err;});
});



module.exports = router;
