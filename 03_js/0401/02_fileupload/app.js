const express=require('express');
const app = express();
const multer = require('multer');
const upload = multer({dest: 'download/'})

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('index')
})

app.post('/upload', upload.single('file'), (req,res)=>{
    res.send('upload');
    req.file = req.file.originalname; // 파일 원본 이름
    console.log('req file--->', req.file);
})

app.listen(8000, ()=>{
    console.log('8000포트 서버 실행 중');
})