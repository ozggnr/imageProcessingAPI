import supertest from "supertest";
import app from '../index';

const request = supertest(app);
const height = 500;
const width = 500;
const filename = 'santamonica'
describe('Test endpoint success', () => {
    it('api endpoint returns successfully', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200); 
    }),
    it('endpoint works with given width and height', async () => {
        const response = await request.get(`/api/images?filename=${filename}&width=${width}&height=${height}`);
        expect(response.status).toBe(200);
    })  
})