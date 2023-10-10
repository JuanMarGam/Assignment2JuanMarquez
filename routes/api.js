var express = require('express');
var router = express.Router();


var productsRouter = require('./products');
router.use('/products', productsRouter);

var categoriesRouter = require('./categories');
router.use('/categories', categoriesRouter);

module.exports = router;