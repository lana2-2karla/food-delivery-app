require('dotenv').config()

const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json())

app.use(routes)

app.listen(process.env.APP_PORT, () => console.log(`ouvindo na porta ${process.env.APP_PORT}`))
