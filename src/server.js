const express = require('express')
const server = express()
const port = process.env.PORT || 5000
const { name, version } = require('../package.json')

server.get('/__/health', (req, res) => {
  res.json({name, version, status: "ok"})
})

module.exports = server