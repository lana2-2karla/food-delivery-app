const { sign } = require('jsonwebtoken')
require('dotenv').config()

const SECRET = process.env.JWT_SECRET || ''

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256'
}

const generateToken = async (payload) => {
  return sign(payload, SECRET, jwtConfig)
}

module.exports = {
  generateToken
}
