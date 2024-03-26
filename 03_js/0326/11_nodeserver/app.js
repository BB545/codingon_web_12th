const http = require('http')
// http.createServer().listen(8080,function(){
//     console.log('8080포트에서 서버 실행')
// })
// 위에와 같지만 너무 길으니 분리해준 것임
const server = http.createServer();
server.listen(3000,function(){
    console.log('3000포트에서 서버 실행')
})