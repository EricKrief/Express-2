const data = require('../data/data-aggregation.ts');
const uuid = require('uuid/v1');
let categories;

async function initCategories() {
    await data.loadCategories().then(c => {
        categories = c;
    });
}


function getCategories() {
    return categories;
}


function getCategoryById(id) {
    return categories.find(c => c.id === id);
}

function addCategory(name) {
    const category = {
        name: name,
        id: uuid(),
    };
    categories.push(category);
    return category;
}

function deleteCategory(id) {
    let index = -1;
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id === id) {
            index = i;
        }
    }
    if (index === -1) {
        return false;
    }
    categories.splice(index, 1);
    return true;
}

module.exports.getCategories = getCategories;
module.exports.getCategoryById = getCategoryById;
module.exports.addCategory = addCategory;
module.exports.deleteCategory = deleteCategory;


initCategories();



