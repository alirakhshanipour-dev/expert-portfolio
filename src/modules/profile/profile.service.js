const autoBind = require("auto-bind")
const ProfileModel = require("./profile.model.js")
const createHttpError = require("http-errors")
const ProfileMessages = require("./messages/messages.js")
const omitEmpty = require("omit-empty")
const Joi = require("joi")
const ProfileValidationSchema = require("./validations/profile.validation.js")
class ProfileService {
    #model
    constructor() {
        autoBind(this)
        this.#model = ProfileModel
    }

    //  -------------------------------------------------------------   

    // create profile
    async create(optionDto) {
        const validataed_data = omitEmpty(Joi.attempt(optionDto, ProfileValidationSchema))
        const profile = await this.#model.create(validataed_data)
        return profile
    }

    //  -------------------------------------------------------------   

    // get profile
    async get() {
        const profile = (await this.#model.findOne({}))
        if (!profile) throw new createHttpError.NotFound(ProfileMessages.NOT_FOUND)
        return profile
    }

    //  -------------------------------------------------------------

    // update skills methods start

    async update_profile(optionDto) {
        const profile = await this.#model.findOne({})
        await profile.updateOne({
            $set: {
                first_name: optionDto.first_name,
                last_name: optionDto.last_name,
                email: optionDto.email,
                phone: optionDto.phone,
            }
        })
        return true
    }

    async add_skill(optionDto) {
        await this.#model.updateOne({
            first_name: "ali"
        }, {
            $push: {
                skills: optionDto
            }
        })
        return true
    }

    async add_education(optionDto) {
        await this.#model.updateOne({
            first_name: "ali"
        }, {
            $push: {
                educations: optionDto
            }
        })
        return true
    }

    async add_experience(optionDto) {
        await this.#model.updateOne({
            first_name: "ali"
        }, {
            $push: {
                experiences: optionDto
            }
        })
        return true
    }

    async add_project(optionDto) {
        const profile = await this.#model.findOne({})
        await profile.updateOne({
            $push: {
                projects: optionDto
            }
        })
        return true
    }

    // update skills methods end


}

module.exports = new ProfileService()