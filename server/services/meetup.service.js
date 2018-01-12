const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;

// Models
const meetups = require('../models/meetup.model').Meetup;

//////////////////////////
// Export Utilities
//////////////////////////

module.exports = {

    getAll: function () {
        return meetups.find({}).sort({date: -1}).exec();
    },

    getMeetup: function (meetupID) {
        const query = { _id: meetupID };
        return meetups.findOne(query).exec();
    },

    save: function (meetup) {
        return meetups.create(meetup);
    },

    updateMeetup: function (meetupID, meetup) {
        return meetups.findByIdAndUpdate(
            meetupID,
            meetup,
            { new: true }
        ).exec();
    },

    addSubscriber: function (meetupID, subscriber) {
        return meetups.findByIdAndUpdate(
            meetupID,
            {$push: {"subscribers": subscriber}},
            { new: true }
        ).exec();     
    },

    remove: function (meetupID) {
        return meetups.findByIdAndRemove(meetupID).exec();
    },

    removeSubscriber: function (meetupID, subscriberID) {
        return meetups.findByIdAndUpdate(
            meetupID,
            {$pull: {"subscribers": { "_id": subscriberID}}},
            { new: true }
        ).exec();     
    },

};
