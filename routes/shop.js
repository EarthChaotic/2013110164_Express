var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')

/* GET users listing. */
router.get('/', shopController.index )
router.get('/:id', shopController.show )
router.delete('/:id', shopController.destroy )
router.put('/:id', shopController.update )
router.post('/',shopController.insert)

module.exports = router;
