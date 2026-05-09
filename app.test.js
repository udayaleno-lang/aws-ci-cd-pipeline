const request = require('supertest');
const express = require('express');

const app = express();
app.get('/hello', (req, res) => res.send('Hello World from AWS CI/CD!'));

describe('GET /hello', () => {
  it('should return Hello World message', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World from AWS CI/CD!');
  });
});
