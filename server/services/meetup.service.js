// Models
const meetups = require('../models/meetup.model').Meetup

module.exports = {

  getAll: () => {
    return meetups.find({}).sort({date: -1}).exec()
  },

  getMeetup: (meetupID) => {
    const query = { _id: meetupID }
    return meetups.findOne(query).populate('talks.speaker').exec()
  },

  getSubscribers: (meetupID) => {
    const query = { _id: meetupID }
    return meetups.findOne(query)
      .select('subscribers name sequenceNo')
      .populate('subscribers.user', '-password -admin -verified -__v')
      .exec()
  },

  save: (meetup) => {
    return meetups.create(meetup)
  },

  updateMeetup: (meetupID, meetup) => {
    return meetups.findByIdAndUpdate(
      meetupID,
      meetup,
      { new: true }
    ).exec()
  },

  addSubscriber: (meetupID, subscriber) => {
    return meetups.findByIdAndUpdate(
      meetupID,
      {$push: {'subscribers': subscriber}},
      { new: true }
    ).exec()
  },

  remove: (meetupID) => {
    return meetups.findByIdAndRemove(meetupID).exec()
  },

  removeSubscriber: (meetupID, subscriberID) => {
    return meetups.findByIdAndUpdate(
      meetupID,
      {$pull: {'subscribers': { '_id': subscriberID }}}
    ).exec()
  },

  confirmSubscriber: (subscriberID) => {
    return meetups.update({'subscribers._id': subscriberID},
      {$set: {'subscribers.$.confirmed': true}}
    ).exec()
  },

  confirmAll: (meetupID) => {
    return meetups.findById(meetupID)
      .populate('subscribers.user', '-password -admin -verified -__v')
      .exec()
  }

}
