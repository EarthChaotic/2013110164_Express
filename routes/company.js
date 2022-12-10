var express = require('express');
var router = express.Router();
const conpanyController = require('../controllers/conpanyController')

/* GET users listing. */
router.get('/', conpanyController.index )
router.post('/',conpanyController.insert)
router.get('/:id', conpanyController.show )
router.delete('/:id', conpanyController.destroy )
router.put('/:id', conpanyController.update )



module.exports = router;
