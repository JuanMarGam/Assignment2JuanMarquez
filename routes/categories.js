var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/category.controller')

/* GET categories listing. */
router
  .get('/', categoryController.find)
  .post('/', categoryController.save);

router.get('/:_id', categoryController.find)

module.exports = router;
