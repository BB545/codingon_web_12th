const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.set('views', './views')

// req, body 객체를 해석할 수 있는 body-parser 미들웨어
app.use(express.urlencoded({extended:true})) //post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()) //json형식으로 데이터를 주고 받겠다.


//url이 연결되면 실행되면서 ,index.ejs 파일을 불러와 보여준다.
app.get('/', (req, res)=>{
    console.log('루트에서 왔어요.')
    res.render('index')
})

app.get('/login', (req,res)=>{
    console.log('get 방식으로 요청됨')
    console.log('req.query---->', req.query)
})

app.listen(8000,()=>{
    console.log('Server is running...')
})