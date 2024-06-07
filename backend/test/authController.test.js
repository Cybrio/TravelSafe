const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const User = require('../models/User');

beforeAll(async () => {
  const url = 'mongodb://127.0.0.1/tourist-docs-test';
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('POST /api/auth/login', () => {
  beforeAll(async () => {
    const user = new User({ username: 'testuser', password: 'testpassword' });
    await user.save();
  });

  it('should login user and return a token', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should return 400 for invalid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'invaliduser',
        password: 'invalidpassword'
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Invalid username or password');
  });
});