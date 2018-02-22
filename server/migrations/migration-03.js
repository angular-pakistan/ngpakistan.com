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
const user = require('../models/user.model').users;
//import meetups & speakers data
const meetups = require('./meetup/data.js').meetups;
const speakers = require('./speaker/data.js').speakers;
const users = require('./user/data.js').users;
// Build the connection string
var dbURI = 'mongodb://localhost/ng-pakistan';

if(!process.argv[2]){
    console.log('\n\nError: password for admin user not found.');
    console.log("\nRun this script again with the user password you'd like to set for the admin user as the third argument.\n");
    return
} else {
    console.log('\n\nAdmin user email: ', users[0].email);
    console.log('Admin user password: ',process.argv[2]);
    console.log('\n\n');
}
mongoose.Promise = global.Promise;
// Create the database connection
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
    user.remove({}, (err) => {
        if(err){
            console.log(err);
            mongoose.connection.close(function () {
                console.log('Disconnecting Mongoose default connection');
                process.exit(1);
            });
        }
        user.create(users[0]).then((newUser) => {
            newUser.password = newUser.generateHash(process.argv[2]);
            return newUser.save();
        }).then(()=>{
            console.log('Admin user successfully saved');
            mongoose.connection.close(function () {
                console.log('Disconnecting Mongoose default connection');
                process.exit(1);
            });
        })
    })
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
