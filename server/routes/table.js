const app = require('express')
const controller = require('../controllers/table')
const router = app.Router()

router.get('/data', controller.tableData)

module.exports = router
