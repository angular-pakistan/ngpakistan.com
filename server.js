// Get dependencies
const _ = require("lodash");
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const config = require('./server/config/config.js');
//Passport
const passport = require('passport');
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwt = require('jsonwebtoken');
require('./server/config/passport')(passport);

//db
const db = require('./server/db/db');
// Get our API routes
const api = require('./server/routes/api');
const contact = require('./server/routes/contactus.route');
const user = require('./server/routes/user.route');
const meetup = require('./server/routes/meetup.route');
const speaker = require('./server/routes/speaker.route');
const app = express();

app.use(passport.initialize());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);
app.use('/api/v1/contact', contact);
app.use('/api/v1/user', user);
app.use('/api/v1/meetup', meetup);
app.use('/api/v1/speaker', speaker);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = config.get('port');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
