var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')

/* GET users listing. */
router.get('/', staffController.index )
router.get('/:id', staffController.show )
router.delete('/:id', staffController.destroy )
router.put('/:id', staffController.update )
router.post('/',staffController.insert)

module.exports = router;
