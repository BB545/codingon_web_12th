const express = require('express')
const app = express()
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views'); //두개 이름 같아야함


app.get('/', (req,res)=>{
    res.render('index', {title:'HOME'})
})

app.get('/about', (req,res)=>{
    res.render('about', {title:'About'})
})

app.get('/create', (req,res)=>{
    res.render('create', {title: '작성하기'})
})

app.use((req,res)=>{
    res.status(404).render('404')
})

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`)
})