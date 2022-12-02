const { Router } = require('express')
const { loginController } = require('./controllers/login.controller')
const { createUserController } = require('./controllers/user.controller')
const authUser = require('./middlewares/registerValidate')

const router = Router()

router.post('/login', loginController)

router.post('/user', authUser, createUserController)

module.exports = router
