const joi = require('joi');
const categoriesService = require('../services/categories-service.ts');
const minNameLength = 3;
const idLength = 36;

const nameSchema = joi.object({
    name: joi.string().min(minNameLength).required()
}).required();

const idSchema = joi.object({
    id: joi.string().length(idLength).required()
}).required();


function validateId(req, res, next) {
    let objectId = {
        id: req.params.id
    };
    const result = idSchema.validate(objectId);
    if (result.error) {
        let error = "ID must be 36 characters long";
        next(error);
        return;
    }
    next();
}

function validateName(req, res, next) {
    let objectName = {
        name: req.body.name
    };
    const result = nameSchema.validate(objectName);
    if (result.error) {
        let error = "Name must be at least 3 characters long";
        next(error);
        return;
    }
    next();
}



module.exports.nameSchema = nameSchema;
module.exports.idSchema = idSchema;
module.exports.validateId = validateId;
module.exports.validateName =validateName;

