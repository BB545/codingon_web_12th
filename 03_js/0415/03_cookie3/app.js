const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser()); // 미들웨어로 등록

const cookieConfig = {
    maxAge: 24*60 * 60*1000 //24시간
}

app.get('/', (req,res)=>{
    console.log('req.cookies.popup=>', req.cookies.popup);
    res.render('index', {popup: req.cookies.popup})
})

app.post('/setCookie', (req,res)=>{
    // 쿠키 생성를 생성해서 시간제한을 설정
    res.cookie('popup', 'hide', cookieConfig)
    res.send('쿠키 설정 성공')
})

app.listen(PORT, ()=>{
    console.log('8000 server is running...');
})