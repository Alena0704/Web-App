const app = require('express')
const controller = require('../controllers/navform')
const router = app.Router()

router.get('/data',controller.formData)

router.post('/upload',controller.formUpload)


module.exports = router

