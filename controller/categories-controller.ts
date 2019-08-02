const service = require('../services/categories-service.ts');
const productService = require('../services/products-service.ts');


async function getAllCategories(req, res, next) {
    const categories = await service.getCategories();
    res.send(categories);
}

async function getCategoryById(req, res, next) {
    const category = await service.getCategoryById(req.params.id);
    if (!category) {
        let error = "Category not found";
        next(error);
    }
    res.send(category);
}

async function getCategoryProducts(req, res, next) {
    const category = await service.getCategoryById(req.params.id);
    const products = await productService.getProducts();
    if (!category) {
        let error = "Category not found";
        next(error);
    }
    const categoryProducts = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].category === category.name) {
            categoryProducts.push(products[i]);
        }
    }
    res.send(categoryProducts);
}

async function addCategory(req, res, next) {
    const category = await service.addCategory(req.body.name);
    res.status(201).send(category);
}

async function updateCategory(req, res, next) {
    const category = await service.getCategoryById(req.params.id);
    if (!category) {
        let error = "Category not found";
        next(error);
    }
    category.name = req.body.name;
    res.status(202).send(category);
}

async function deleteCategory(req, res, next) {
    const categoryFound = await service.deleteCategory(req.params.id);
    if (!categoryFound) {
        let error = "Category not found";
        next(error);
    }
    res.sendStatus(204);
}


module.exports.getAllCategories = getAllCategories;
module.exports.getCategoryById = getCategoryById;
module.exports.getCategoryProducts = getCategoryProducts;
module.exports.addCategory = addCategory;
module.exports.updateCategory = updateCategory;
module.exports.deleteCategory = deleteCategory;