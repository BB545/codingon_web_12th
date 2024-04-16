const express = require('express');
const session = require('express-session')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('session')
})

// /set 세션 설정 요청
// secure : 값을 true로 하면 https에서만 세션을 주고 받을 수 있다.
// secret : 안전하게 쿠키를 전송하기 위한 쿠키 서명 값 (세션을 발급할 때 사용되는 키)
// resave : 세션에 수정사항이 생기지 않더라도 매 요청마다 세션을 다시 저장할 것인지 결정 (권장은 false)
// saveUninitialized : 세션에 저장할 내용이 없더라도 처음부터 세션을 생성할지 설정
// httpOnly : 웹 서버를 통해서만 쿠키에 접근 가능
// maxAge : 쿠키 생명 단위는 ms
// cookie() 에 maxAge 넣는다

app.use(session({
    secret: 'mySessionSecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 60*1000
    }
}))

app.get('/set', (req,res)=>{
    req.session.name = '홍길동';
    res.send('세션 설정 완료')
})

app.get('/name', (req,res)=>{
    console.log(req.session.name);
    console.log(req.sessionID);
    console.log('req.session', req.session);
    res.send({id: req.sessionID, name: req.session.name})
})

app.get('/destroy',(req,res)=>{
    req.session.destroy(err=>{
        if(err){
            console.log('err');
            res.send('failed')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`${PORT} server is running...`);
})