const supertest = require('supertest');
const server = require('./index');
const db = require('./data/db-config');

beforeAll(async () => {
  await db.seed.run()
});

test('welcome route', async () => {
  const res = await supertest(server).get('/')
  expect(res.status).toBe(200)
  expect(res.type).toBe('application/json')
  expect(res.body.message).toBe('Welcome to Save The Animals API')
});