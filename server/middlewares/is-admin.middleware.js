const isAdmin = (req, res, next) => {
  const header = req.get('Authorization');
  const base64Url = header.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  const payload = JSON.parse(Buffer.from(base64, 'base64'));
  if(!payload.admin)
    res.sendStatus(401)
  else
    next();
}

module.exports.isAdmin = isAdmin;