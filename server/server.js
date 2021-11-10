const http = require('http')
const controller = require('./socketInit')
const app = require('./app');

const PORT = process.env.PORT || 5000

const server = http.createServer(app)

server.listen(PORT, () => 
    console.log(`\nExample app listening on port ${PORT}!\n`)
)

controller.createConnection(server)