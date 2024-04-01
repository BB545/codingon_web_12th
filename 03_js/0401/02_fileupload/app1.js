const express=require('express');
const app = express();
const multer = require('multer');
const upload = multer({dest: 'filedownload/'}) //filedownload폴더에다 저장해줘

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req,res)=>{
    // res.send('멀티파일 업로드')
    res.render('index')
})

// app.post('/api/upload', upload.single('file'), (req,res)=>{
//     res.send('upload okay')
// })

app.post('/upload', upload.single('demo'), (req,res)=>{
    res.send('upload');
    console.log('req file--->', req.file);
})

app.listen(8000, ()=>{
    console.log('서버 실행 중');
})