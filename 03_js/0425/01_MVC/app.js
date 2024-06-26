const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/static', express.static(__dirname + '/static'))

const indexRouter = require('./routes');
app.use('/', indexRouter)

app.get('*', (req,res)=>{
    res.render('404')
})

app.listen(8000, ()=>{
    console.log('8000 server is running...');
})