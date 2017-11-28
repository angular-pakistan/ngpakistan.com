// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const db = require('./server/db/db');
// Get our API routes
const api = require('./server/routes/api');
const contact = require('./server/routes/contactus.route');
const user = require('./server/routes/user.route');
const meetup = require('./server/routes/meetup.route');
const app = express();


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
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '80';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
