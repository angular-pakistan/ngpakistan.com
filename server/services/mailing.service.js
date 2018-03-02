const config = require('../config/config.js')
const apiKey = config.get('mailgun_api_key')
const DOMAIN = config.get('mailgun_domain')
const mailgun = require('mailgun-js')({apiKey: apiKey, domain: DOMAIN})
const mailTemplate = require('../templates/mail')

module.exports = {
  sendVerificationMail: (email, name, token) => {
    const data = mailTemplate.createVerificationMail(email, name, token)
    return mailgun.messages().send(data)
  },

  sendMeetupConfirmationMail: (email, name, meetupName, meetupSequenceNo) => {
    const data = mailTemplate.createConfirmationMail(
      email,
      name,
      meetupName,
      meetupSequenceNo
    )
    return mailgun.messages().send(data)
  }
}
