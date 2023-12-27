const autoBind = require("auto-bind")
const contactService = require("./contact.service.js")
const ContactMessages = require("./messages/messages.js")

class ContactController {
    #service
    constructor() {
        autoBind(this)
        this.#service = contactService
    }
    async get(req, res, next) {
        try {
            const contactForm = await this.#service.get()
            return res.render("main", { body: contactForm, user: req.user })
        } catch (error) {
            next(error)
        }
    }
    async send_message(req, res, next) {
        try {
            const { name, subject, email, message } = req.body
            await this.#service.send_message({ name, subject, email, message })
            return res.status(200).json({
                message: ContactMessages.CREATED
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new ContactController()