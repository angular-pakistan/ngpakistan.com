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
  
  Meetup.remove({},(err) => {
      if(err)
        console.log(err);
      else
        console.log('Meetups successfully removed. Rollback Successful.');
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
