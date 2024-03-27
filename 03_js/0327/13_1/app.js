const express = require('express')
const app = express()
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views'); //두개 이름 같아야함
app.use(express.static('public')) //변경되지 않아야하는 폴더 등록


app.get('/', (req,res)=>{
    res.render('index', {title:'HOME'})
})

app.get('/about', (req,res)=>{
    res.render('about', {title:'About'})
})

app.get('/create', (req,res)=>{
    res.render('create', {title: '작성하기'})
}) //지정된 경로가 있을때 get사용

app.use((req,res)=>{
    res.status(404).render('404')
}) //use를 사용하는 이유는 지정된 경로가 없기 때문

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`)
})