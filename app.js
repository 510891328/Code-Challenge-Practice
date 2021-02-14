const http = require('http')

const Palindrome = require('./Palindrome');

const server = http.createServer((req, res) => {
    Palindrome("cbbd")
})

server.listen(8080)