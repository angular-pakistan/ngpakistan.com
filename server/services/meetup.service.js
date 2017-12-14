const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;

// Models
const meetups = require('../models/meetup.model').Meetup;

//////////////////////////
// Export Utilities
//////////////////////////

module.exports = {

    getAll: function (callback) {
        meetups.find({}, callback);
    },

    getMeetup: function (meetupID, callback) {
        const query = { _id: meetupID };
        meetups.findOne(query, callback);
    },

    getMeetupBySequenceNo: function(sequenceNo, callback) {
        const query = { sequenceNo: sequenceNo };
        meetups.findOne(query, callback);
    },

    save: function (meetup, callback) {
        meetups.create(meetup, callback);
    },

    updateMeetup: function (meetupID, meetup, callback) {
        meetups.findByIdAndUpdate(
            meetupID,
            meetup,
            { new: true },
            callback
        );
    },

    addSubscriber: function (meetupID, subscriber, callback) {
        meetups.findByIdAndUpdate(
            meetupID,
            {$push: {"subscribers": subscriber}},
            { new: true },
            callback
        );     
    },

    remove: function (meetupID, callback) {
        meetups.findByIdAndRemove(meetupID, callback);
    },

    removeSubscriber: function (meetupID, subscriberID, callback) {
        meetups.findByIdAndUpdate(
            meetupID,
            {$pull: {"subscribers": { "_id": subscriberID}}},
            { new: true },
            callback
        );     
    },

};
