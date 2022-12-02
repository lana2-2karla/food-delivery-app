const { sign, verify } = require('jsonwebtoken')
require('dotenv').config()

const SECRET = process.env.JWT_SECRET || ''

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256'
}

const generateToken = async (payload) => {
  return sign(payload, SECRET, jwtConfig)
}

const decodedToken = (token) => {
  const payload = verify(token, SECRET)
  const status = { status: 401, message: 'invalid Token' }
  if (!payload) throw status
  return payload
}

module.exports = {
  generateToken,
  decodedToken
}
