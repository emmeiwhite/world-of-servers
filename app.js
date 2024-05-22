/* ---
const http = require('http')

const server = http.createServer((request, response) => {
  console.log('Request waech aesi naabkaaran nich')
  response.write(`<h1>Welcome to the Velocity Kashmir Tour and Travels</h1>`)
})

server.listen(3300, () => {
  console.log('Listening on port 3300')
})
---*/

const http = require('http')

// Define a list of todos
const todos = [
  { id: 1, title: 'Learn Node.js', completed: false },
  { id: 2, title: 'Write an API', completed: true },
  { id: 3, title: 'Create a project', completed: false }
]

// Create the server
const server = http.createServer((request, response) => {
  // Check the URL of the request
  if (request.url === '/todos' && request.method === 'GET') {
    // Set the response header to indicate JSON content
    response.writeHead(200, { 'Content-Type': 'application/json' })
    // Send the JSON response
    response.end(JSON.stringify(todos))
  } else {
    // Default response for other routes
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('I am here, I am here, Che kya gassi Madnoo')
  }
})

// Start the server and listen on port 3300
server.listen(3300, () => {
  console.log('Listening on port 3300')
})
