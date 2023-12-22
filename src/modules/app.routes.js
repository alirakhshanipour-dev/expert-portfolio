const { Router } = require("express");
const { ProfileRouter } = require("./profile/profile.routes.js");

// router instance
const router = Router()



// app routers start
router.use("/profile", ProfileRouter)
// app routers end

module.exports = {
    mainRouter: router
}