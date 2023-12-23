const { Router } = require("express");
const { ProfileRouter } = require("./profile/profile.routes.js");
const profileController = require("./profile/profile.controller.js");
const get_user = require("../middleware/getUser.js");


// router instance
const router = Router()



// app routers start

router.use("/profile", get_user, ProfileRouter)
// app routers end

module.exports = {
    mainRouter: router
}