const service = require('../services/products-service.ts');


async function getAllProducts(req, res, next) {
    const products = await service.getProducts();
    res.send(products);
}

async function getProductById(req, res, next) {
    const product = await service.getProductById(req.params.id);
    res.send(product);
}

async function addProduct(req, res, next) {
    const product = await service.addProduct(req.body.category, req.body.name, req.body.itemsInStock);
    res.status(201).send(product);
}

async function updateProduct(req, res, next) {
    const product = await service.getProductById(req.params.id);
    if (!product) {
        let error = "Category not found";
        next(error);
    }
    if (req.body.name)
        product.name = req.body.name;
    if (req.body.category)
        product.category = req.body.category;
    if (req.body.itemsInStock)
        product.itemsInStock = req.body.itemsInStock;
    res.status(202).send(product);
}

async function deleteProduct(req, res, next) {
    const productFound = await service.deleteProduct(req.params.id);
    if (!productFound) {
        let error = "Product not found";
        next(error);
    }
    res.sendStatus(204);
}

module.exports.getAllProducts = getAllProducts;
module.exports.getProductById = getProductById;
module.exports.addProduct = addProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;