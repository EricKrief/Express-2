const request = require('request-promise');
const uuid = require('uuid/v1');


function loadCategories() {
    return new Promise((resolve, reject) => {
        request("http://localhost:3000/data/categories.json").then(categories => {
            categories = JSON.parse(categories);
            for (let i = 0; i < categories.length; i++) {
                categories[i].id = uuid();
            }
            resolve(categories);
        }).catch("In categories catch");
    })
}


function loadProducts() {
    return new Promise((resolve, reject) => {
        request("http://localhost:3000/data/products.json").then(products => {
            products = JSON.parse(products);
            for (let i = 0; i < products.length; i++) {
                products[i].id = uuid();
            }
            resolve(products);
        }).catch("In products catch");
    })
}


module.exports.loadCategories = loadCategories;
module.exports.loadProducts = loadProducts;






