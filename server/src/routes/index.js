const { Router } = require('express')
const router = Router()
const roomRouter = require('./rooms/rooms.router')

router.use('/rooms', roomRouter)

module.exports = router