const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());
app.get('/products', (req, res) => {
  res.json([{ id: 1, name: 'Product 1' }]);
});

describe('GET /products', () => {
  it('should return products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, name: 'Product 1' }]);
  });
});

