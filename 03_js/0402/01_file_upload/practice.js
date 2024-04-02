const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/uploads', express.static('uploads')); // 경로 변하지 않게 고정
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const example = multer({
    storage: multer.diskStorage ({
        destination(req,file,done){
            done(null,'uploads/')
        },
        filename(req,file,done){
            file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8')
            done(null, file.originalname)
        }
    })
})

app.get('/', (req,res)=>{
    res.render('practice')
})

app.post('/upload', example.single('demo'), (req,res)=>{
    res.render('prac-result', {filename: req.file.originalname, id: req.body.id, pw: req.body.pw, name: req.body.name, age: req.body.age})
})

app.listen(PORT, ()=>{
    console.log(`${PORT} 서버 실행 중`);
})