const { Schema, model } = require("mongoose")

const ContactSchema = new Schema({
    name: { type: String, required: true, maxlength: 60 },
    subject: { type: String, required: true, maxlength: 120 },
    email: { type: String, required: true, maxlength: 100 },
    message: { type: String, required: true, maxlength: 255 },
})


const ContactModel = model('Contact', ContactSchema)

module.exports = ContactModel