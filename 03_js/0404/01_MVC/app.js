const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.set(express.urlencoded({extended:true}));
app.set(express.json());

// app.get('/', (req,res)=>{
//     res.render('index')
// })

// app.get('/user', (req,res)=>{
//     res.render('user')
// })


const indexRouter = require('./routes/index'); // 미들웨어 불러오기 사용 = use
app.use('/', indexRouter)

const userRouter = require('./routes/user');
app.use('/user', userRouter)


// app.get('*', (req,res)=>{
//     res.render('404')
// })
// 위와 같은 내용이지만 다른 방법으로
app.use('*',(req,res)=>{
    res.status(404).render('404')
}) //항상 마지막에 둔다. 이전에 적으면 *로 이후의 다른 get이행 내역을 찾지 못한다.

app.listen(8000,()=>{
    console.log('8000번 서버 실행 중');
})