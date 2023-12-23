const autoBind = require("auto-bind")
const profileService = require("./profile.service.js")
const ProfileMessages = require("./messages/messages.js")
const { StatusCodes } = require("http-status-codes")

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
                description
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
                    description,
                }
            )

            return res.json({
                message: ProfileMessages.CREATED,
            })

        } catch (error) {
            next(error)
        }
    }

    // get profile start
    async get(req, res, next) {
        try {
            const profile = await this.#service.get()
            // return res.status(StatusCodes.OK).json({
            //     profile
            // })
            const bodyContent = "./layouts/landing.ejs"
            return res.render("main", { body: bodyContent, user: req.user })
        } catch (error) {
            next(error)
        }
    }
    // get profile end


    // update profile methods start

    async update_profile(req, res, next) {
        try {
            const { first_name, last_name, email, phone } = req.body
            await this.#service.update_profile({ first_name, last_name, email, phone })
            res.status(StatusCodes.OK).json({
                message: ProfileMessages.UPDATED
            })
        } catch (error) {
            next(error)
        }
    }

    async add_skill(req, res, next) {
        try {
            const skill = req.body
            await this.#service.add_skill(skill)
            res.status(StatusCodes.OK).json({
                message: ProfileMessages.ADD_SKILL
            })
        } catch (error) {
            next(error)
        }
    }

    async add_education(req, res, next) {
        try {
            const education = req.body
            await this.#service.add_education(education)
            res.status(StatusCodes.OK).json({
                message: ProfileMessages.ADD_EDUCATION
            })
        } catch (error) {
            next(error)
        }
    }

    async add_experience(req, res, next) {
        try {
            const experience = req.body
            await this.#service.add_experience(experience)
            res.status(StatusCodes.OK).json({
                message: ProfileMessages.ADD_EXPERIENCE
            })
        } catch (error) {
            next(error)
        }
    }

    async add_project(req, res, next) {
        try {
            const project = req.body
            await this.#service.add_project(project)
            res.status(StatusCodes.OK).json({
                message: ProfileMessages.ADD_PROJECT
            })
        } catch (error) {
            next(error)
        }
    }

    // update profile methods end
}

module.exports = new ProfileController()