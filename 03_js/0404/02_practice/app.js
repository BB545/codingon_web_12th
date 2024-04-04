const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.set(express.urlencoded({extended:true}));
app.set(express.json());

const indexRouter = require('./routes/index');
app.use('/', indexRouter) //라우터에 있는 index 렌더링 불러오기, 사용하기

const userRouter = require('./routes/user');
app.use('/user', userRouter)

app.use('*',(req,res)=>{
    res.status(404).render('404')
}) 

app.listen(8000,()=>{
    console.log('8000번 서버 실행 중');
})