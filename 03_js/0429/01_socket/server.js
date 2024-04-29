const express = require('express');
const ws = require('ws');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('client')
})

const server = app.listen(PORT, ()=>{
    console.log(`${PORT} server`);
})

// express 서버와 웹소켓 서버를 연결해서 서버와 클라이언트가 같은 포트를 사용하도록
const wsServer = new ws.Server({server: server});
// 클라이언트 소켓을 저장할 배열
const sockets = [];

// connection이라는 이벤트가 들어오면
wsServer.on('connection', (socket)=>{
    console.log('[클라이언트 연결 완료]');
    // 접속한 클라이언트를 배열에 추가
    sockets.push(socket)
    // on 메소드는 addEventListener메소드와 같은 역할
    socket.on('message', (message)=>{
        console.log('클라이언트에서 받은 메세지', message);
        console.log(`클라이언트에서 받은 메세지 ${message}`);
        // 웹 소켓 서버에 접속한 모든 클라이언트에게 메세지를 전송
        socket.send(`${message}`)
    })

    socket.on('error', (error)=>{
        console.log('에러 발생', error);
    })

    socket.on('close', ()=>{
        console.log('[클라이언트 연결 종료]');
    })
})