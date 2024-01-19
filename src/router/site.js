const express = require('express')

const SiteController = require('../controllers/site')

const router = express.Router()

// router.get('/', SiteController.index)
router.get('/', SiteController.redirect)

module.exports = router
