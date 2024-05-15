const express = require('express')
const router = express.Router()
const AuthController = require('../controller/AuthControler')

router.get('/login', AuthController.login)
router.post('/login', AuthController.loginPost)
router.get('/register', AuthController.register)
router.post('/loginpost', AuthController.registerPost)

module.exports = router;