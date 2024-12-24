import { createContact, getContact } from "../services/contact.service.js";
import Joi from 'joi';
export const createContactController = async (req, res) => {
    const { error } = contactSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const { name, email, country, company, support, message } = req.body;

    try {
        const newContact = await createContact({ name, email, country, company, support, message });
        return res.status(201).json(newContact);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message || 'Something went wrong while creating the contact.' });
    }
};
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await getContact();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const contactSchema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
        'string.empty': 'Name is required.',
        'string.min': 'Name must be at least 3 characters long.',
        'string.max': 'Name can\'t exceed 100 characters.'
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required.',
        'string.email': 'Email must be a valid email address.'
    }),
    country: Joi.string().required().messages({
        'string.empty': 'Country is required.',
    }),
    company: Joi.string().required().messages({
        'string.empty': 'Company is required.',
    }),
    support: Joi.string().valid('technical', 'sales', 'partnership', 'other').required().messages({
        'string.empty': 'Support type is required.',
        'any.only': 'Support must be one of the following: technical, sales, partnership, other.',
    }),
    message: Joi.string().min(10).required().messages({
        'string.empty': 'Message is required.',
        'string.min': 'Message must be at least 10 characters long.',
    }),
});