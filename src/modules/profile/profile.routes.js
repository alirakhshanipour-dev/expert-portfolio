const { Router } = require("express");
const profileController = require("./profile.controller.js");

const router = Router()

// profile routes start
router.get("/", profileController.get)
router.post("/create", profileController.create)
router.patch("/update_profile", profileController.update_profile)
router.patch("/add_skill", profileController.add_skill)
router.patch("/add_education", profileController.add_education)
router.patch("/add_experience", profileController.add_experience)
router.patch("/add_project", profileController.add_project)
// profile routes end


module.exports = {
    ProfileRouter: router
}
