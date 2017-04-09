const express = require('express');
const router = express.Router();
const contColor = require('../controllers/color-random')

router.get('/colors', contColor.randomColor)

module.exports = router
