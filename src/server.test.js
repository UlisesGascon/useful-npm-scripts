const request = require('supertest')
const server = require('./server')

const {name, version} = require('../package.json')

it('health endpoint. GET /__/health', async () => {
  const res = await request(server)
    .get('/__/health')
    .send()

  expect(res.statusCode).toEqual(200)
  expect(res.body).toEqual({
      name, version, status: "ok"
  })
})
