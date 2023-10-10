var express = require('express');
var router = express.Router();
var productController = require('../controllers/product.controller')

/* GET products listing. */
router
  .get('/', productController.find)
  .post('/', productController.save);

router.get('/:_id', productController.find)

module.exports = router;
