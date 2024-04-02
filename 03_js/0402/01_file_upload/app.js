const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const upload = multer({dest:'download/'});

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/',(req,res)=>{
    res.render('form')
})

app.post('/upload', upload.single('demo'), (req,res)=>{
    req.file = req.file.originalname
    console.log('오리지날 이름', req.file);
    res.send('upload 성공')
})

app.listen(PORT, ()=>{
    console.log(`${PORT} 서버 실행 중`);
})