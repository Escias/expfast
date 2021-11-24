const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/', controller.home)
router.get('/login', controller.login)
router.get('/create', controller.create)

module.exports = router;
