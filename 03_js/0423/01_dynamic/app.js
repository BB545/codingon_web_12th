const express = require('express');
const { user } = require('../../0404/03_MVC_login/controller/Cuser');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/practice', (req,res)=>{
    res.render('practice')
})

app.get('/axios', (req,res)=>{
    console.log(req.query);
    res.send(req.query)
})

app.get('/practice2', (req,res)=>{
    res.render('practice2')
})

const userInfo = {id: '홍길동', pw: '1234'};

app.post('/axiosPost', (req,res)=>{
    console.log(req.body);
    const {id,pw} = req.body;
    if(id===userInfo.id && pw===userInfo.pw){
        res.send(req.body)
    } else {
        res.send(false)
    }
})

app.listen(8000, ()=>{
    console.log('8000 server is running...');
})