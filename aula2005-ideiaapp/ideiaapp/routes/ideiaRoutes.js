const express = require('express')
const router = express.Router()
const IdeiaController = require('../controllers/IdeiaController')
const { route } = require('./authRoutes')

router.get('/add', IdeiaController.createIdeia)
router.post('/add', IdeiaController.createIdeiaSave)
router.post('/remove', IdeiaController.removeIdeia)
router.get('/', IdeiaController.updateIdeia)
router.post()

module.exports = router