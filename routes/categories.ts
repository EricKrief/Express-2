const express = require('express');
const router = express.Router();
const validation = require('../middleware/validation.ts');
const controller = require('../controller/categories-controller.ts');


router.get("/", controller.getAllCategories);

router.get("/:id", validation.validateId, controller.getCategoryById);

router.get("/:id/products", validation.validateId, controller.getCategoryProducts);

router.post("/", controller.addCategory);

router.put("/:id", validation.validateId, controller.updateCategory);

router.delete("/:id", validation.validateId, controller.deleteCategory);

module.exports = router;