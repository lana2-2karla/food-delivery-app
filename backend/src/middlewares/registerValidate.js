const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')

const registerValidate = Joi.object({
  firstName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: passwordComplexity().required()
})

const validateSchema = (req, _res, next) => {
  const { error } = registerValidate.validate(req.body)
  if (error) {
    const { message } = error.details[0]
    const status = { status: 400, message }
    throw status
  }
  next()
}

module.exports = {
  validateSchema
}
