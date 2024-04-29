const express = require('express');
const sockets = require('socket.io');
const http = require('http');
const fs = require('fs');
const app = express();

app.use('/css', express.static('./static/css'));
app.use('/js', express.static('./static/js'));

// express http 서버 생성
const server = http.createServer(app);

// 생성된 서버를 socket.io 연결
const io = sockets(server);

app.get('/', (req,res)=>{
    fs.readFile('./static/index.html', function(err, data){
        if(err){
            res.send('에러')
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        }
    })
})

io.sockets.on('connection', function(socket){
    // 새로운 유저
    socket.on('newUser', function(name){
        console.log(name + '님이 접속하였습니다');
        socket.name = name;
        io.sockets.emit('update', {type: 'connect', name: 'SERVER', message: name+'님이 접속하였습니다'})
    })

    // 메세지 전송
    socket.on('message', function(data){
        data.name = socket.name;
        console.log('data =>', data);
        socket.broadcast.emit('update', data)
    })

    socket.on('disconnect', function(){
        console.log(socket.name + '님이 나가셨습니다');
        socket.broadcast.emit('update', {type: 'disconnect', name: 'SERVER', message: socket.name+'님이 나가셨습니다'})
    })
    
    socket.on('send', function(data){
        console.log('w전달된 메세지', data.msg);
    })

    socket.on('disconnect', function(){
        console.log('접속 종료');
    })
})

server.listen(8000, ()=>{
    console.log('8000 server');
})