const Joi = require("joi");

const validator = (schema) => (payload) => 
    schema.validate(payload, { abortEarly: false });

const itemSchema = Joi.object({
    item: Joi.string()
    .pattern(/^[a-zA-Z0-9 ]+$/)
    .min(4)
    .max(30)
    .required(),
    craftsman: Joi.number().required(),
    type: Joi.number().required(),
});

const updateItemSchema = Joi.object({
    updatedItem: Joi.string()
    .pattern(/^[a-zA-Z0-9 ]+$/)
    .min(4)
    .max(30)
    .required(),
    craftsman: Joi.number().required(),
    type: Joi.number().required(),
});

const craftsmanSchema = Joi.object({
    name: Joi.string()
    .pattern(/^[a-zA-Z0-9 ]+$/)
    .min(4)
    .max(30)
    .required()
});

exports.validateItem = validator(itemSchema);
exports.validateUpdateItem = validator(updateItemSchema);
exports.validateCraftsman = validator(craftsmanSchema);