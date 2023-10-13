var express = require('express');
var router = express.Router();
var productController = require('../controllers/product.controller')

/* GET products listing. */
router
  .get('/', productController.find)
  .post('/', productController.save)
  .delete('/', productController.deleteAll);
router.get('/:id', productController.findById);
router.put('/:id', productController.update);
router.delete('/:id', productController.deleteById);

module.exports = router;
