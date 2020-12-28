const express = require('express')
const server = express()
const { name, version } = require('../package.json')

server.get('/__/health', (req, res) => {
  res.json({ status: 'ok' })
})

server.get('/__/manifest', (req, res) => {
  res.json({ name, version })
})

module.exports = server
