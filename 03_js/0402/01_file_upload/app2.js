const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/download', express.static('download')); // 경로 변하지 않게 고정
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const example = multer({
    storage: multer.diskStorage ({
        destination(req,file,done){
            done(null,'download/')
        },
        filename(req,file,done){
            // 한글이름처리
            file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8')
            done(null, file.originalname)
        }
    })
})

app.get('/', (req,res)=>{
    res.render('form2')
})

//파일 여러개 받기
app.post('/upload3', example.array('demo'), (req,res)=>{
    console.log('req.file--->', req.files);
    console.log('여러개 중 첫번째 파일', req.files[0].filename);
    res.render('result2', {filecount: req.files.length, filenames: req.files})
})

app.listen(PORT, ()=>{
    console.log(`${PORT} 서버 실행 중`);
})