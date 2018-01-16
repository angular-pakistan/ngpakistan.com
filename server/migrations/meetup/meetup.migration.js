/* 
    Run this script to migrate meetups into your local database using:
    node meetup.migration.js

*/


// Bring Mongoose into the app
var mongoose = require( 'mongoose' );
mongoose.set('debug', true);
//import the meetup model
const Meetup = require('../../models/meetup.model').Meetup;
//import meetups data
const meetups = require('./data.js').meetups;
// Build the connection string
var dbURI = 'mongodb://localhost/ng-pakistan';

// Create the database connection
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
  
  Meetup.insertMany(meetups, (err, docs) => {
    if(err){
        console.log("Error inserting meetups into collection", err);
        mongoose.connection.close(function () {
            console.log('Disconnecting Mongoose default connection');
            process.exit(1);
        });
    }
    console.log('Successfully inserted docs into collection', docs);
    mongoose.connection.close(function () {
        console.log('Disconnecting Mongoose default connection');
        process.exit(0);
    });
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
