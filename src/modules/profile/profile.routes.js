const { Router } = require("express");
const profileController = require("./profile.controller.js");

const router = Router()

router.post("/create", profileController.create)


module.exports = {
    ProfileRouter: router
}