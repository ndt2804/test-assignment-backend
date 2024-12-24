import prisma from '../utils/prisma.js';

export const createContact = async ({ name, email, country, company, support, message }) => {
    try {
        const newContact = await prisma.getInTouchNguyenDuyTan.create({
            data: {
                name,
                email,
                country,
                company,
                support,
                message,
            },
        });

        return newContact;
    } catch (error) {
        throw new Error('Error creating contact: ' + error.message);
    }
};