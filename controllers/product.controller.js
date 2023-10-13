let ProductModel = require('../models/product.model');

module.exports.save = async (req, res) => {
    const product = new ProductModel(req.body);
    let result = await product.save();
    res.json(result)
}

module.exports.find = async (req, res) => {
    let result = await ProductModel.find(req.params);
    res.json(result);
}
module.exports.findById = async (req, res) => {
    const productId = req.params.id;

    // Use findById to find the product by its ID.
    const product = await ProductModel.findById(productId);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
};
module.exports.update = async (req, res) => {
    const productId = req.params.id;
    const updatedProductData = req.body;

    const updatedProduct = await ProductModel.findByIdAndUpdate(
        productId,
        updatedProductData,
        { new: true }
    );

    res.json(updatedProduct);
};
module.exports.deleteAll = async (req, res) => {
    // Use deleteMany to remove all products from the database.
    const deleteResult = await ProductModel.deleteMany({});

    if (deleteResult.deletedCount === 0) {
        return res.status(404).json({ message: 'No products found to delete' });
    }

    res.json({ message: 'All products have been deleted' });
};
module.exports.deleteById = async (req, res) => {
    const productId = req.params.id;

    // Use findByIdAndDelete to remove the product by its ID.
    const deleteResult = await ProductModel.findByIdAndDelete(productId);

    if (!deleteResult) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product has been deleted' });
};
module.exports