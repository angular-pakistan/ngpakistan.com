const createVerificationMail = (address, name, token) => {
    return {
        from: 'Angular Pakistan <no-reply@ngpakistan.com>',
        to: address,
        subject: 'Verify your account',
        text: `Dear ${name},
        \nClick on the following link to verify your account: http://ngpakistan.com/#/verify?email=${address}&token=${token}`
    };
}

module.exports.createVerificationMail = createVerificationMail;
