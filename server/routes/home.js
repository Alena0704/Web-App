const app = require('express')
const controller = require('../controllers/home')
const router = app.Router()

router.get('', controller.home)

module.exports = router
