const server = require('./server')

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})