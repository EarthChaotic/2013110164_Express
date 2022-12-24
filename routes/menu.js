var express = require('express');
var router = express.Router();
const menuController = require('../controllers/menuController')

/* GET users listing. */
router.get('/', menuController.index )

module.exports = router;
