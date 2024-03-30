const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('index')
})

//ajax 요청들
app.get('/ajax',(req,res)=>{
    console.log(req.query);
    res.send(req.query)
})

app.post('/ajax',(req,res)=>{
    console.log(req.body);
    res.send(req.body)
})



app.listen(8000,()=>{
    console.log('8000포트에서 서버 실행');
})