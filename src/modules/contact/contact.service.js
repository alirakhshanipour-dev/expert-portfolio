const autoBind = require("auto-bind")
const ContactModel = require("./contact.model.js")
const contactValidationSchema = require("./validations/contact.validation.js")
const Joi = require("joi")
const omitEmpty = require("omit-empty")

class ContactService {
    #model
    constructor() {
        autoBind(this)
        this.#model = ContactModel
    }

    async get() {
        const contactForm = "./layouts/contact.ejs"
        return contactForm
    }

    async send_message(optionDto) {
        const validataed_data = omitEmpty(Joi.attempt(optionDto, contactValidationSchema))
        await this.#model.create(validataed_data)
        return true
    }
}


module.exports = new ContactService()