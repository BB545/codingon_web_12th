const express = require('express');

const app = express()
app.listen(8000,()=>{
    console.log('8000포트로 서버 운행 중')
})

app.get('/',(req,res)=>{
    res.send(`<h2>Home page express</h2>`)
})

app.get('/about',(req,res)=>{
    res.send(`<h2>Home page express</h2>`)
})