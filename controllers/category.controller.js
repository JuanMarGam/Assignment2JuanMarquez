let CategoryModel = require('../models/category.model');

module.exports.save = async (req, res) => {
    const category = new CategoryModel(req.body);
    let result = await category.save();
    res.json(result)
}

module.exports.find = async (req, res) => {
    let result = await CategoryModel.find(req.params)
    res.json(result)
}