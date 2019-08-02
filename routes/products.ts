const express = require('express');
const router = express.Router();
const validation = require('../middleware/validation.ts');
const controller = require('../controller/products-controller.ts');
let products;


router.get('/', controller.getAllProducts);

router.post('/', validation.validateName, controller.addProduct);

router.get('/:id', validation.validateId, controller.getProductById);

router.put("/:id", validation.validateName, validation.validateId, controller.updateProduct);

router.delete("/:id", validation.validateId, controller.deleteProduct);

module.exports = router;