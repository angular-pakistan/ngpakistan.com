const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;

// Models
const meetups = require('../models/meetup.model').Meetup;

//////////////////////////
// Export Utilities
//////////////////////////

module.exports = {

    getAll: () => {
        return meetups.find({}).sort({date: -1}).exec();
    },

    getMeetup: (meetupID) => {
        const query = { _id: meetupID };
        return meetups.findOne(query).exec();
    },

    getMeetupAndPopulate: (meetupID) => {
        const query = { _id: meetupID };
        return meetups.findOne(query).populate('talks.speaker').exec();
    },

    save: (meetup) => {
        return meetups.create(meetup);
    },

    updateMeetup: (meetupID, meetup) => {
        return meetups.findByIdAndUpdate(
            meetupID,
            meetup,
            { new: true }
        ).exec();
    },

    addSubscriber: (meetupID, subscriber) => {
        return meetups.findByIdAndUpdate(
            meetupID,
            {$push: {"subscribers": subscriber}},
            { new: true }
        ).exec();     
    },

    remove: (meetupID) => {
        return meetups.findByIdAndRemove(meetupID).exec();
    },

    removeSubscriber: (meetupID, subscriberID) => {
        return meetups.findByIdAndUpdate(
            meetupID,
            {$pull: {"subscribers": { "_id": subscriberID}}},
            { new: true }
        ).exec();     
    },

};
