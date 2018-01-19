/* 
    Run this script to migrate meetups into your local database using:
    node speaker.migration.js

*/


// Bring Mongoose into the app
var mongoose = require( 'mongoose' );
mongoose.set('debug', true);
//import the meetup model
const speaker = require('../../models/speaker.model').speaker;
//import meetups data
const speakers = require('./data.js').speakers;
// Build the connection string
var dbURI = 'mongodb://localhost/ng-pakistan';

// Create the database connection
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
  
  speaker.insertMany(speakers, (err, docs) => {
    if(err){
        console.log("Error inserting speakers into collection", err);
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
