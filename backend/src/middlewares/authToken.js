const { decodedToken } = require('../helpers/jwtToken')

const authTokenMiddleware = async (req, _res, next) => {
  const { authorization } = req.headers

  const status = { status: 404, message: 'Token not found' }

  if (!authorization) throw status

  const decoded = decodedToken(authorization)

  const status2 = { status: 401, message: 'Invalid token' }

  if (!decoded) throw status2

  req.data = decoded

  next()
}

module.exports = {
  authTokenMiddleware
}
