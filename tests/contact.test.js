import request from 'supertest';
import app from '../src/index.js';
import prisma from '../src/utils/prisma.js';

describe('POST /api/v1/contact-us', () => {
    it('should create a new contact', async () => {
        // Dữ liệu giả lập để gửi form
        const contactData = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            country: 'US',
            company: 'Test Inc.',
            support: 'technical',
            message: 'Need help with the product.',
        };

        // Gửi request POST đến API
        const response = await request(app)
            .post('/api/v1/contact-us')
            .send(contactData)
            .set('Accept', 'application/json');

        // Kiểm tra response có status là 201 (Created)
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('name', contactData.name);
        expect(response.body).toHaveProperty('email', contactData.email);

        // Kiểm tra dữ liệu có được chèn vào cơ sở dữ liệu hay không
        const contactInDb = await prisma.getInTouchNguyenDuyTan.findFirst({
            where: {
                email: contactData.email,
            },
        });

        expect(contactInDb).not.toBeNull();
        expect(contactInDb).toHaveProperty('name', contactData.name);
        expect(contactInDb).toHaveProperty('email', contactData.email);
    });

    // Close the Prisma client connection after all tests
    afterAll(async () => {
        await prisma.$disconnect();
    });
});