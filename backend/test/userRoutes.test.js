const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

beforeAll(async () => {
  const url = 'mongodb://127.0.0.1/tourist-docs-test';
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('GET /api/user/profile', () => {
  let token;

  beforeAll(async () => {
    const user = new User({ username: 'testuser', password: 'testpassword' });
    await user.save();
    token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
  });

  it('should return user profile for valid token', async () => {
    const response = await request(app)
      .get('/api/user/profile')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('username', 'testuser');
  });

  it('should return 403 for no token', async () => {
    const response = await request(app)
      .get('/api/user/profile');

    expect(response.status).toBe(403);
    expect(response.body).toHaveProperty('message', 'No token provided');
  });

  it('should return 500 for invalid token', async () => {
    const response = await request(app)
      .get('/api/user/profile')
      .set('Authorization', 'Bearer invalidtoken');

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message', 'Failed to authenticate token');
  });
});