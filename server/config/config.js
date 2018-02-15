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
        default: '',
        env: "MAILGUN_API"
    },
    mailgun_domain: {
        default: '',
        env: "MAILGUN_DOMAIN"
    }
});
 
config.validate();

module.exports = config;