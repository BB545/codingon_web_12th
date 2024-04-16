const express = require('express');
const session = require('express-session')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 60*1000
    }
}))

const userInfo = { id: 'banana', pw: '1234'};

app.get('/', (req,res)=>{
    // console.log('req.sesion.user >', user);
    res.render('index')
})

app.get('/login', (req,res)=>{
    res.render('login')
})

app.post('/login', (req,res)=>{
    const { id, pw } = req.body;
    if (id === userInfo.id && pw === userInfo.pw) {
        req.session.user = { id: userInfo.id, pw: userInfo.pw };
        console.log(req.sessionID);
        console.log(req.session.user);
        res.render('include', { user: req.session.user.id });
    } else {
        res.send('로그인 실패');
    }
})

app.listen(PORT, ()=>{
    console.log(`${PORT} server is running...`);
})