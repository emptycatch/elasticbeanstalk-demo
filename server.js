const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((request, response) => {
  console.log("Received request: " + request.url)
  response.end("Hello World!")
})

server.listen(port, (err) => {
  if (err) {
    return console.log('Failed to start node.js server', err)
  }
  console.log(`Listening on port ${port}`)
})