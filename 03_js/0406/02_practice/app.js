const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const indexRouter = require('./routes/index')
app.use('/', indexRouter)

app.listen(3000, ()=>{
    console.log('3000 server running...');
})