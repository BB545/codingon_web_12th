const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// 파일을 저장할 폴더
app.use('/download', express.static('download'));

const dest = multer({dest: 'download/'})
const example = multer({
    storage: multer.diskStorage({
        // cb = 콜백함수 (이름은 마음대로 지정해도됨), 파일이 저장될 상대경로 설정
        destination(req,file,cb){
            cb(null,'download/')
        },
        filename(req,file,cb){
            // 파일 이름 변경없이 오리지널 그대로 저장 & 한글 파일 이름도 가능
            file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8')
            // const ext = path.extname(this.destination) // 확장자
            cb(null, file.originalname)
        }
    })
})

app.get('/', (req,res)=>{
    res.render('index')
})

app.post('/upload2', example.single('demo'), (req,res)=>{
    // res.send('upload')
    // console.log('app.js > example.single > req.file', req.file);
    res.render('result', {filename: req.file})
})

app.listen(8000, ()=>{
    console.log('8000 server is running...');
})