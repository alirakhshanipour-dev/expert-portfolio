const { Schema, model } = require("mongoose");

// skill schema
const SkillSchema = new Schema({
    title: { type: String, required: true, maxlength: 255 }, // Example: Maximum length set to 255 characters
    level: { type: Number, required: true },
    icon: { type: String, required: false, maxlength: 255 },
    description: { type: String, required: false, maxlength: 1000 }, // Example: Maximum length set to 1000 characters
});

// project schema
const ProjectSchema = new Schema({
    title: { type: String, required: true, maxlength: 255 },
    url: { type: String, required: false, maxlength: 255 },
    features: { type: String, required: true, maxlength: 1000 },
});

// education schema
const EducationSchema = new Schema({
    title: { type: String, required: true, maxlength: 255 },
    university: { type: String, required: true, maxlength: 255 },
    description: { type: String, required: true, maxlength: 1000 },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

// experience schema
const ExperienceSchema = new Schema({
    title: { type: String, required: true, maxlength: 255 },
    company: { type: String, required: true, maxlength: 255 },
    description: { type: String, required: true, maxlength: 1000 },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

// profile schema
const ProfileSchema = new Schema(
    {
        first_name: { type: String, required: true, maxlength: 255 },
        last_name: { type: String, required: true, maxlength: 255 },
        email: { type: String, required: true, maxlength: 255 },
        phone: { type: String, required: true, maxlength: 20 }, // Example: Maximum length set to 20 characters
        image: { type: String, required: false },
        skills: [SkillSchema],
        projects: [ProjectSchema],
        educations: [EducationSchema],
        experiences: [ExperienceSchema],
    },
    {
        timestamps: true,
    }
);

const ProfileModel = model('Profile', ProfileSchema);

module.exports = ProfileModel
