const userService = require('../services/user.service')

const isAdmin = (req, res, next) => {
  const header = req.get('Authorization')
  const base64Url = header.split('.')[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  const payload = JSON.parse(Buffer.from(base64, 'base64'))
  userService.getUser(payload.id)
    .then(user => {
      if (user.admin) {
        next()
      } else {
        res.sendStatus(401)
      }
    })
    .catch(err => { throw err })
}

module.exports.isAdmin = isAdmin
