const express = require('express');
const router = express.Router();
const meetupService = require('../services/meetup.service');
const passport = require('passport');
const isAdmin = require('../middlewares/is-admin.middleware').isAdmin;

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

router.post('/', passport.authenticate('jwt', { session: false }), isAdmin, (req, res, next) => {
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

router.put('/:id', passport.authenticate('jwt', { session: false }), isAdmin, (req, res, next) => {
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

router.post('/:id/subscriber', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const {user, date} = req.body;
  const subscriber = {user, date};
  const meetupID = req.params.id;

  meetupService.addSubscriber(meetupID, subscriber)
    .then((meetup) => res.json({
                        href: req.hostname,
                        data: meetup
                      }))
    .catch(err => {throw err;});
});

router.get('/:id/subscriber', passport.authenticate('jwt', { session: false }), isAdmin, (req, res, next) => {
  const id = req.params.id;
  meetupService.getSubscribers(id)
    .then((subscribers) => res.json({
                              href: req.hostname,
                              data: subscribers
                          }))
    .catch(err => {throw err;});
});

router.delete('/:id/subscriber/:subscriberID', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const subscriberID = req.params.subscriberID;
  const id = req.params.id;
  meetupService.removeSubscriber(id, subscriberID)
    .then((meetup) => res.json({
                        href: req.hostname,
                        data: meetup
                      }))
    .catch(err => {throw err;});
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), isAdmin, (req, res, next) => {
  const id = req.params.id;
  meetupService.remove(id)
    .then((meetup) => res.json({
                        href: req.hostname,
                        data: meetup
                      }))
    .catch(err => {throw err;});
});



module.exports = router;
