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
  if(req.body.name &&
  req.body.email &&
  req.body.subject &&
  req.body.message &&
  req.body.date) {
    const {name, email, subject, message, date} = req.body;
    const contactUs = {
      name,
      email,
      subject,
      message,
      date
    };
    contactUsService.save(contactUs)
      .then((contact) => res.json({
                          href: req.hostname,
                          data: contact
                        }))
      .catch(err => {throw err;});
  } 
});



module.exports = router;
