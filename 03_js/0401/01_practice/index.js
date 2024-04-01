const express=require('express');
const index=express();

index.use(express.urlencoded({extended:true}));
index.use(express.json());

index.set('view engine', 'ejs');
index.set('views', './views');

index.get('/', (req,res)=>{
    res.render('index')
})

index.listen(8000, ()=>{
    console.log('8000번 포트에서 실행 중');
})