const express = require('express');
const app = express();
const PORT = 8000;
const cookieParser=require("cookie-parser")

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cookieParser('mySecretKey'))
const cookieConfig={
    httpOnly:true,
    maxAge:60*1000,
    signed: true
}

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/setCookie', (req,res)=>{
    res.cookie('CookieCookie', 'CookieCookie', cookieConfig);
    res.send('set cookie!')
})

app.get('/getCookie', (req,res)=>{
    res.send(req.signedCookies)
})

app.get('/clearCookie', (req,res)=>{
    res.clearCookie('CookieCookie', 'CookieCookie', cookieConfig);
    res.send('clear cookie!')
})

app.listen(PORT, ()=>{
    console.log(`${PORT} server is running...`);
})