const Joi = require('joi');

const contactValidationSchema = Joi.object({
    name: Joi.string().required().max(60),
    subject: Joi.string().required().max(120),
    email: Joi.string().email().required().max(100),
    message: Joi.string().required().max(255),
});

module.exports = contactValidationSchema;