const { Router } = require("express");
const contactController = require("./contact.controller.js");

const router = Router()

router.get("/", contactController.get)
router.post("/send-message", contactController.send_message)

module.exports = {
    ContactRouter: router
}