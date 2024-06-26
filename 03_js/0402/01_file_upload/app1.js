const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const path = require('path')

const hardisk = multer.diskStorage({
    destination: (req,file,cb)=>{
        console.log('disk storage');
        cb(null, 'download') // 처음 값은 null줘야하고, 도착지는 download
    },
    filename: (req,file,cb)=>{
        const ext = path.extname(file.originalname)
        console.log('file originalname', file.originalname);
        console.log('ext--->', ext);
        cb(null,file.originalname, ext)
    }
}) //파일이름이 그대로 저장됨
const example = multer({storage:hardisk})

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('form1')
})

app.post('/upload2', example.single('demo'), (req,res)=>{

})

app.listen(PORT, ()=>{
    console.log(`${PORT} 서버 실행 중`);
})