const ProfileModel = require("../modules/profile/profile.model.js")

const get_user = async (req, res, next) => {
    try {
        const profile = await ProfileModel.findOne({})
        req.user = profile
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = get_user