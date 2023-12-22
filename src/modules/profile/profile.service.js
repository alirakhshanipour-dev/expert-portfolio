const autoBind = require("auto-bind")
const ProfileModel = require("./profile.model.js")
class ProfileService {
    #model
    constructor() {
        autoBind(this)
        this.#model = ProfileModel
    }
    // create profile
    async create(optionDto) {
        const profile = await this.#model.create(optionDto)
        return profile
    }

    // update profile
    async update(optionDto) { }

    // get profile
    async get() { }

}

module.exports = new ProfileService()