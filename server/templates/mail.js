const createVerificationMail = (address, name, token) => {
    return {
        from: 'Angular Pakistan <no-reply@ngpakistan.com>',
        to: 'talhakhatri3@gmail.com',
        subject: 'Verify your account',
        text: `Dear ${name},\nClick on the following link to verify your account: http://localhost:4200/#/verify?email=${address}&token=${token}`
    };
}

module.exports.createVerificationMail = createVerificationMail;
