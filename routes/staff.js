var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')
const { body } = require('express-validator');

/* GET users listing. */
router.get('/', staffController.index )
router.get('/:id', staffController.show ) /* http://localhost:3000/staff/63942f4002f645214c4a2f12 */
router.delete('/:id', staffController.destroy )
router.put('/:id', staffController.update )
router.post('/',[body('name').not().isEmpty().withMessage("Please enter name/sirname"),
                body('salary').not().isEmpty().withMessage("Please enter Salary").isNumeric().withMessage("Please Insert only number")

], staffController.insert);

module.exports = router;
