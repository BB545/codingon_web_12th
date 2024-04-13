const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.set(express.urlencoded({extended:true}));
app.set(express.json());

const userRouter = require('./routes/index');
const { userInfo } = require('./model/Cuser');
app.use('/', userRouter)

app.post('/axios', (req,res)=>{
    const {id,pw} = req.body;
    if (id === userInfo.userid && pw === userInfo.userpw) {
        res.send(req.body)
    } else {
        res.status(401).send()
    }
})

app.use('*', (req,res)=>{
    res.status(404).render('404')
})

app.listen(8000, ()=>{
    console.log('8000번 서버 실행 중');
})