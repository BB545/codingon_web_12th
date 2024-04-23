const express = require('express');
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

app.listen(8000, ()=>{
    console.log('8000 server is running...');
})