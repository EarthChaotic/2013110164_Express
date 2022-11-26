var express = require('express');
var router = express.Router();
const conpanyController = require('../controllers/conpanyController')

/* GET users listing. */
router.get('/', conpanyController.index )




module.exports = router;
