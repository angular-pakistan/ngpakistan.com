const express = require('express');
const router = express.Router();
const meetupService = require('../services/meetup.service');
const _ = require('lodash');

router.get('/', function (req, res, next) {
  console.log("I was called");
  meetupService.getAll(function (err, meetups) {
    if (err) {
      throw err;
    }

    res.json({
      href: req.hostname,
      data: meetups
    })

  })
});

router.get('/:id', function (req, res, next) {
  const id = req.params.id;

  meetupService.getMeetup(id, function (err, meetup) {
    if (err) {
      throw err;
    }

    res.json({
      href: req.hostname,
      data: meetup
    })

  })
});

router.post('/', function (req, res, next) {

  const sequenceNo = req.body.sequenceNo;
  const name = req.body.name;
  const date = req.body.date;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const location = req.body.location;
  const city = req.body.city;
  const host = req.body.host;
  const talks = req.body.talks;
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
  meetupService.save(meetup, function (err, meetup) {
    if (err) {
      throw err;
    }

    res.json({
      href: req.hostname,
      data: meetup
    })

  })
});

router.put('/:id', function (req, res, next) {
  const sequenceNo = req.body.sequenceNo;
  const name = req.body.name;
  const date = req.body.date;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const location = req.body.location;
  const city = req.body.city;
  const host = req.body.host;
  const talks = req.body.talks;
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
  meetupService.updateMeetup(id, meetup, function (err, meetup) {
    if (err) {
      throw err;
    }

    res.json({
      href: req.hostname,
      data: meetup
    })
  });
})

router.post('/:id/subscriber', function (req, res, next) {
  const userID = req.body.userID;
  const date = req.body.date;
  const level = req.body.level;
  const code = req.body.code;
  const subscriber = {userID,date,level,code};
  const id = req.params.id;
  console.log(subscriber);
  meetupService.addSubscriber(id, subscriber, function (err, meetup) {
    if (err) {
      throw err;
    }

    res.json({
      href: req.hostname,
      data: meetup
    })
  })
});

router.delete('/:id/subscriber/:subscriberID', function (req, res, next){
  const subscriberID = req.params.subscriberID;
  const id = req.params.id;
  meetupService.removeSubscriber(id, subscriberID, function (err, meetup) {
    if (err) {
      throw err;
    }

    res.json({
      href: req.hostname,
      data: meetup
    })
  })
});

router.delete('/:id', function (req, res, next) {
  const id = req.params.id;
  meetupService.remove(id, function (err, meetup) {
    if (err) {
      throw err;
    }

    res.json({
      href: req.hostname,
      data: meetup
    })
  })
});



module.exports = router;
