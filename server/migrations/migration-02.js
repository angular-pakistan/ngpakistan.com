/* 
    Run this script to migrate meetups into your local database using:
    node meetup.migration.js

*/


// Bring Mongoose into the app
var mongoose = require( 'mongoose' );
mongoose.set('debug', true);
//import the meetup model
const Meetup = require('../models/meetup.model').Meetup;
const speaker = require('../models/speaker.model').speaker;
//import meetups & speakers data
const meetups = require('./meetup/data.js').meetups;
const speakers = require('./speaker/data.js').speakers;
// Build the connection string
var dbURI = 'mongodb://localhost/ng-pakistan';

// Create the database connection
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
 
  Meetup.remove({},(err) => {
    if(err) {
        console.log(err);
        mongoose.connection.close(function () {
            console.log('Disconnecting Mongoose default connection');
            process.exit(1);
        });
    }
    console.log('Meetups successfully removed. Rollback Successful.');
    speaker.remove({}, (err) => {
        if(err)
            console.log(err);
        else {
            console.log('Speakers successfully removed. Rollback Successful.')
            speaker.insertMany(speakers, (err, speakerDocs) => {
                if(err){
                    console.log("Error inserting speakers into collection", err);
                    mongoose.connection.close(function () {
                        console.log('Disconnecting Mongoose default connection');
                        process.exit(1);
                    });
                }
                console.log('Successfully inserted speakers into collection', speakerDocs);
                console.log('Now inserting meetups into database');
                const speakerIDs = speakerDocs.map(doc => doc._id);
                //insert meetups with correct speakers
                Meetup.insertMany(meetups, (err, docs) => {
                    if(err){
                        console.log("Error inserting meetups into collection", err);
                        mongoose.connection.close(function () {
                            console.log('Disconnecting Mongoose default connection');
                            process.exit(1);
                        });
                    } else {
                        docs.forEach((doc) => {
                            if(doc.sequenceNo === 3){
                                doc.talks[0].speaker.push(speakerIDs[7]);
                                doc.talks[1].speaker.push(speakerIDs[7]);
                                doc.talks[2].speaker.push(speakerIDs[2]);
                                doc.talks[3].speaker.push(speakerIDs[3]);
                            } else if(doc.sequenceNo === 4){
                                doc.talks[0].speaker.push(speakerIDs[4]);
                                doc.talks[1].speaker.push(speakerIDs[7]);
                                doc.talks[2].speaker.push(speakerIDs[5]);
                                doc.talks[3].speaker.push(speakerIDs[2]);
                                doc.talks[4].speaker.push(speakerIDs[6]);
                            } else if(doc.sequenceNo === 5){
                                doc.talks[0].speaker.push(speakerIDs[7]);
                                doc.talks[1].speaker.push(speakerIDs[8]);
                                doc.talks[2].speaker.push(speakerIDs[9]);
                                doc.talks[4].speaker.push(speakerIDs[4]);
                            } else if(doc.sequenceNo === 6){
                                doc.talks[0].speaker.push(speakerIDs[3]);
                                doc.talks[1].speaker.push(speakerIDs[12]); 
                                doc.talks[2].speaker.push(speakerIDs[13]);
                                doc.talks[3].speaker.push(speakerIDs[14]);
                            }
                            doc.save((err, res) => {
                                if(err){
                                    console.log(`Error saving doc number ${doc.sequenceNo}`, err);
                                    mongoose.connection.close(function () {
                                        console.log('Disconnecting Mongoose default connection');
                                        process.exit(1);
                                    }); 
                                }
                            });
                        });
                    }
                });
            });
        }
    })

  });
  
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
