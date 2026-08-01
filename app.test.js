const request = require('supertest');
const app = require('./app');

test('GET /hello returns message', async () => {
  const res = await request(app).get('/hello');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Hello CI/CD!');
});
