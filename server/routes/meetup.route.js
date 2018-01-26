const express = require('express');
const router = express.Router();
const meetupService = require('../services/meetup.service');
const _ = require('lodash');

router.get('/', (req, res, next) => {

  meetupService.getAll()
    .then((meetups) => res.json({
                        href: req.hostname,
                        data: meetups
                      }))
    .catch(err => {throw err;});

});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  meetupService.getMeetup(id)
  .then((meetup) => res.json({
                        href: req.hostname,
                        data: meetup
                      }))
  .catch(err => {throw err;});
});

router.post('/', (req, res, next) => {
  if(req.body.sequenceNo && 
    req.body.name &&
    req.body.date &&
    req.body.startTime &&
    req.body.endTime &&
    req.body.location &&
    req.body.city &&
    req.body.host &&
    req.body.talks &&
    req.body.subscribers) {
    const {
      name,
      sequenceNo,      
      date, 
      startTime,
      endTime, 
      location,
      city,
      host,
      talks,
      subscribers
    } = req.body;
    const meetup = {sequenceNo,
                    name,
                    date, 
                    startTime,
                    endTime, 
                    location,
                    city,
                    host,
                    talks,
                    subscribers
                  };
    meetupService.save(meetup)
      .then((meetup) => res.json({
                          href: req.hostname,
                          data: meetup
                        }))
      .catch(err => {throw err;});
  }
});

router.put('/:id', (req, res, next) => {
  if(req.body.sequenceNo && 
    req.body.name &&
    req.body.date &&
    req.body.startTime &&
    req.body.endTime &&
    req.body.location &&
    req.body.city &&
    req.body.host &&
    req.body.talks) {
    const {
      name,
      sequenceNo,      
      date, 
      startTime,
      endTime, 
      location,
      city,
      host,
      talks
    } = req.body;
    const meetup = {sequenceNo,
                    name,
                    date, 
                    startTime,
                    endTime, 
                    location,
                    city,
                    host,
                    talks
                  };
    const id = req.params.id;
    meetupService.updateMeetup(id, meetup)
      .then((meetup) => res.json({
                          href: req.hostname,
                          data: meetup
                        }))
      .catch(err => {throw err;});
  }
})

router.post('/:id/subscriber', (req, res, next) => {
  const {userID, date, level, code} = req.body;
  const subscriber = {userID,date,level,code};
  const id = req.params.id;

  meetupService.addSubscriber(id, subscriber)
    .then((meetup) => res.json({
                        href: req.hostname,
                        data: meetup
                      }))
    .catch(err => {throw err;});
});

router.delete('/:id/subscriber/:subscriberID', (req, res, next) => {
  const subscriberID = req.params.subscriberID;
  const id = req.params.id;
  meetupService.removeSubscriber(id, subscriberID)
    .then((meetup) => res.json({
                        href: req.hostname,
                        data: meetup
                      }))
    .catch(err => {throw err;});
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  meetupService.remove(id)
    .then((meetup) => res.json({
                        href: req.hostname,
                        data: meetup
                      }))
    .catch(err => {throw err;});
});



module.exports = router;
