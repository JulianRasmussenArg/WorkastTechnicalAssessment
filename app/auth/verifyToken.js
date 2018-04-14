function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  if(!process.env.TOKEN)
    return next();
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  if (token !== process.env.TOKEN)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
  next();
}

module.exports = verifyToken;