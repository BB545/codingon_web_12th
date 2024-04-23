const express = require('express');
const app = express();

// body-parser를 사용하여 요청 본문 파싱 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

// app.set(express.urlencoded({extended:true}));
// app.set(express.json());

const userRouter = require('./routes/index');
const { userInfo } = require('./model/Cuser');
app.use('/', userRouter)

app.post('/axios', (req,res)=>{
    const userInfoO = userInfo();
    const {userid,userpw} = userInfoO;
    const {id,pw} = req.body;
    console.log(userid);
    console.log(id);
    if (id === userid && pw === userpw) {
        res.send(req.body)
    } else {
        res.send({response: false})
    }
})

app.use('*', (req,res)=>{
    res.status(404).render('404')
})

app.listen(8000, ()=>{
    console.log('8000번 서버 실행 중');
})