var convict = require('convict');
 
var config = convict({
    port: {
        doc: "The port to bind.",
        format: "port",
        default: 80,
        env: "PORT"
    },
    database: {
        host: {
            default: "mongodb://localhost/ng-pakistan",
            env: "DB_HOST"
        }
    },
    mailgun_api_key: {
        default: 'key-c0515d395d6d5188df64af9c2f783194',
        env: "MAILGUN_API"
    },
    mailgun_domain: {
        default: 'sandbox171d4d23ca894d458d322157f279255a.mailgun.org',
        env: "MAILGUN_DOMAIN"
    }
});
 
config.validate();

module.exports = config;