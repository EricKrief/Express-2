const data = require('../data/data-aggregation.ts');
const uuid = require('uuid/v1');
let products;

async function initProducts() {
    await data.loadProducts().then(p => {
        products = p;
    });
}


function getProducts() {
    return products;
}


function getProductById(id) {
    return products.find(p => p.id === id);
}

function getProductsByCategory(name) {
    let categoryProducts = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === name) {
            categoryProducts.push(products[i]);
        }
    }
    return categoryProducts;
}

function addProduct(category, name, itemsInStock) {
    const product = {
        category: category,
        name: name,
        itemsInStock: itemsInStock,
        id: uuid(),
    };
    products.push(product);
    return product;
}

function deleteProduct(id) {
    let index = -1;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            index = i;
        }
    }
    if (index === -1) {
        return false;
    }
    products.splice(index, 1);
    return true;
}

module.exports.getProducts = getProducts;
module.exports.getProductById = getProductById;
module.exports.getProductsByCategory = getProductsByCategory;
module.exports.addProduct = addProduct;
module.exports.deleteProduct = deleteProduct;

initProducts();