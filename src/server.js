const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const {name, version} = require('../package.json')

app.get('/', (req, res) => {
  res.send(`Hello and welcome to ${name}@${version}!`)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})