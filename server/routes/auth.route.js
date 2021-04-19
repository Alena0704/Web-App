const app = require('express')
const controller = require("../controllers/auth.controller")
const router = app.Router()

router.post('/register', controller.register)

router.post('/login', controller.login)

router.get('/user', controller.user)

module.exports = router
