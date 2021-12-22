//importando modulos y librerías
//importing modules and libraries
const express = require('express')
const apiRouter = require('./routes/index')

//
const app = express()

//configuraciones || setting
app.set('name','Server')
app.set('port', process.env.PORT || 4000)

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

//routes
app.use('/api',apiRouter)

//export app
module.exports = app

