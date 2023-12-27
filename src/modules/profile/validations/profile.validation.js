const Joi = require('joi');

// Define Joi schema for the Skill
const SkillSchema = Joi.object({
    title: Joi.string().required().max(255),
    level: Joi.number().required(),
    icon: Joi.string().max(255).allow(""),
    description: Joi.string().max(1000).allow(""),
});

// Define Joi schema for the Project
const ProjectSchema = Joi.object({
    title: Joi.string().required().max(255),
    url: Joi.string().max(255).allow(""),
    features: Joi.string().required().max(1000),
    icon: Joi.string().max(255).allow(""),
});

// Define Joi schema for the Education
const EducationSchema = Joi.object({
    title: Joi.string().required().max(255),
    university: Joi.string().required().max(255),
    description: Joi.string().required().max(1000),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
});

// Define Joi schema for the Experience
const ExperienceSchema = Joi.object({
    title: Joi.string().required().max(255),
    company: Joi.string().required().max(255),
    description: Joi.string().required().max(1000),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
});

// Define Joi schema for the Profile
const ProfileValidationSchema = Joi.object({
    first_name: Joi.string().required().max(255),
    last_name: Joi.string().required().max(255),
    email: Joi.string().required().max(255),
    phone: Joi.string().required().max(20),
    image: Joi.string().max(255).allow(""),
    skills: Joi.array().items(SkillSchema),
    description: Joi.string().required(),
    projects: Joi.array().items(ProjectSchema),
    educations: Joi.array().items(EducationSchema),
    experiences: Joi.array().items(ExperienceSchema),
});

module.exports = ProfileValidationSchema;
