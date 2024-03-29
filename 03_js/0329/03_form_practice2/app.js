const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res)=>{
    console.log('루트에서 들어옴')
    res.render('index')
})

app.get('/login', (req,res)=>{
    console.log('로그인GET 요청')
    console.log(req.query) //객체형태로 데이터 출력
    res.render('result', {title:'GET 로그인 화면', userInfo:req.query})
})

app.post('/login', (req,res)=>{
    console.log('로그인 POST 요청')
    console.log('req body--->', req.body) //객체형태로 데이터 출력
    res.render('result', {title:'POST 로그인 화면', userInfo:req.body})
})

app.post('/js-form-check', (req,res)=>{
    console.log(req.body) //객체형태로 데이터 출력
    res.send('js validation 성공')
})

app.listen(8080, ()=>{
    console.log('Server is running...')
})