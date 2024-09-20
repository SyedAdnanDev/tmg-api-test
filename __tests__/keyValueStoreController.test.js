const request = require('supertest');
const app = require('../app');

describe('Key-Value Store Controller', () => {

    it('should set an item in the store', async () => {
        const response = await request(app).post('/kvs/set').send({ key: 'name', value: 'John' });
        expect(response.statusCode).toBe(201);
        expect(response.body.store).toEqual({ name: { value: 'John', expireAt: null } });
    });

    it('should get an item from the store', async () => {

        const response = await request(app).get('/kvs/get/name');
        expect(response.statusCode).toBe(200);
        expect(response.body.value).toBe('John');
    });

    it('should return 404 for getting a non-existent key', async () => {
        const response = await request(app).get('/kvs/get/nonexistent');
        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe("Not Found: Key 'nonexistent' does not exist");
    });

    it('should delete an item from the store', async () => {
        await request(app).post('/kvs/set').send({ key: 'name', value: 'John' });

        const response = await request(app).delete('/kvs/delete/name');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Deleted key 'name'");

        const getResponse = await request(app).get('/kvs/get/name');
        expect(getResponse.statusCode).toBe(404);
        expect(getResponse.body.error).toBe("Not Found: Key 'name' does not exist");
    });

    it('should return 404 for deleting a non-existent key', async () => {
        const response = await request(app).delete('/kvs/delete/nonexistent');
        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe("Not Found: Key 'nonexistent' does not exist");
    });
});
