var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')

/* GET users listing. */
router.get('/', staffController.index )
router.get('/:id', staffController.show ) /* http://localhost:3000/staff/63942f4002f645214c4a2f12 */
router.delete('/:id', staffController.destroy )
router.put('/:id', staffController.update )
router.post('/',staffController.insert)

module.exports = router;
