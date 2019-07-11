const jwt = require('jsonwebtoken')

const { tokenKey } = require('./config')

const userCheck = (req, res, next) => {
  const token = req.headers['x-auth-token']
  if (!token) return res.status(401).send(('Nema tokena'))

  jwt.verify(token, tokenKey, (err, decoded) => {
    if (err) return res.status(403).send(('Nevalidan token'))
    req.user = decoded
    next()
  })
}

const adminCheck = (req, res, next) => {
  if (req.user.role != 'admin') return res.status(403)
  next()
}

const logger = (req, res, next) => {
  console.log(req.method, req.url)
  next()
}

module.exports = {
  userCheck,
  adminCheck,
  logger
}