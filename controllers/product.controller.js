let ProductModel = require('../models/product.model');

module.exports.save = async (req, res) => {
    const product = new ProductModel(req.body);
    let result = await product.save();
    res.json(result)
}

module.exports.find = async (req, res) => {
    let result = await ProductModel.find(req.params)
    res.json(result)
}
