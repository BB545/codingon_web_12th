const express = require('express');
const app = express();

const multer  = require('multer');
const path = require('path');

app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use('/uploads', express.static(__dirname + "/uploads"));

app.set('view engine','ejs');
app.set('views', './views');

const abc = multer({dest: 'uploads/'})
const uploadDetail = multer({
    storage:multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'uploads/')
        },
        filename(req,file,cb){
            file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8')
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext)
        },
    }),
    limits: {
        fieldSize: 5*1024*1025 //5mb
    }
});

app.get("/", (req,res)=>{
    res.render('index')
})

// 데이터 보내서 ejs파일의 axios에서 받음
app.post('/dynamic', uploadDetail.single('dynamicFile') , (req, res)=>{
    res.send({file: req.file, title: req.body.title})
})

app.listen(8000, ()=>{
console.log('Server is running...')
})