const createVerificationMail = (address, name, token) => {
    return {
        from: 'Angular Pakistan <no-reply@ngpakistan.com>',
        to: address,
        subject: 'Verify your account',
        text: `Dear ${name},
        \nClick on the following link to verify your account: 
        http://ngpakistan.com/#/verify?email=${address}&token=${token} 
        \n\nRegards,\nAngular Pakistan Team`
    };
}

const createConfirmationMail = (address, name, meetup, sequenceNo = '') => {
    return {
        from: 'Angular Pakistan <no-reply@ngpakistan.com>',
        to: address,
        subject: `Confirmation for  ${meetup} #${sequenceNo}`,
        text: `Dear ${name},
        \nCongratulations! You have been shortlisted for ${meetup} #${sequenceNo} please stay tuned for updates on our Angular Pakistan page and website. We hope to see you soon.
        \nRegards,\nAngular Pakistan Team`
    };
}

module.exports = {
    createVerificationMail,
    createConfirmationMail
}
