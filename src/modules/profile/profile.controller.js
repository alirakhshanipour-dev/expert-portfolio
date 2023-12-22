const autoBind = require("auto-bind")
const profileService = require("./profile.service.js")
const ProfileMessages = require("./messages/messages.js")

class ProfileController {
    #service
    constructor() {
        autoBind(this)
        this.#service = profileService
    }

    // create profile
    async create(req, res, next) {
        try {
            // Extract data from the request body
            const {
                first_name,
                last_name,
                email,
                phone,
                skills,
                projects,
                educations,
                experiences,
            } = req.body;
            const profile = await this.#service.create(
                {
                    first_name,
                    last_name,
                    email,
                    phone,
                    skills,
                    projects,
                    educations,
                    experiences,
                }
            )

            return res.json({
                message: ProfileMessages.CREATED,
            })

        } catch (error) {
            next(error)
        }
    }

    // get profile
    async get(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }

    // update profile
    async update(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
}

module.exports = new ProfileController()