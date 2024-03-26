const http_ex = require('http');

// console.log(http_ex)
const server=http_ex.createServer()
server.listen(3000)
console.log("3000포트가 열렸습니다.")