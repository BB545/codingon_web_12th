const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/practice1',(req,res)=>{
    res.render('practice1')
})

app.get('/practice2',(req,res)=>{
    res.render('practice2')
})

app.get('/practice', (req,res)=>{
    res.send(req.query)
})

app.post('/practice', (req,res)=>{
    res.send(req.body)
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

//axios
app.get('/axios', (req,res)=>{
    console.log(req.query);
    res.send(req.query)
})

app.post('/axios', (req,res)=>{
    console.log(req.body);
    res.send(req.body)
})

//fetch
app.get('/fetch',(req,res)=>{
    console.log(req.query);
    res.send(req.query)
})

app.post('/fetch', (req,res)=>{
    console.log(req.body);
    res.send(req.body)
})

app.listen(8000,()=>{
    console.log('8000포트에서 서버 실행');
})