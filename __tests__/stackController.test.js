const request = require('supertest');
const app = require('../app');

describe('Stack Controller', () => {
    it('should get and remove the top item from the stack', async () => {
        await request(app).post('/stack').send({ item: 'firstItem' });
        await request(app).post('/stack').send({ item: 'exampleItem' });
    
        // Act: Get and remove the top item
        const response = await request(app).get('/stack');
    
        // Assert
        expect(response.statusCode).toBe(200);
        expect(response.body.topItem).toBe('exampleItem');
    
        // Verify the stack now only contains 'firstItem'
        const stackAfterGet = response.body.stack;
        expect(stackAfterGet).toEqual(['firstItem']);
    });

    it('should add an item to the stack', async () => {
        
        const response = await request(app).post('/stack').send({ item: 'exampleItem' });

        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe("Added 'exampleItem' to stack");
        expect(response.body.stack).toEqual(['firstItem','exampleItem']);
    });
    
});
