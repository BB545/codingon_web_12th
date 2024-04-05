const express = require('express');
const app = express();
const mysql = require('mysql2');

app.set('view engine', 'ejs');
app.set('views', './views');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'kdt'
})

app.get('/',(req,res)=>{
    // var sql = 'select * from customer';
    var sql = 'insert into customer (custid, custname, addr, phone, birth) value (?,?,?,?,?)';
    var values = ['peach', '홍길동', '마포구에 살아요', '01011111', '2024-04-05']
    conn.query(sql, values, function(err, rows, fields){
        if(err){
            console.log('연결실패');
            res.status(500).send('Internal Server Error')
        } 
        //else {
            // res.render('index', {mydata: rows})
        //}
    })
})

// conn.end();
app.listen(8000, ()=>{
    console.log('8000 server running...'+'mysql running...');
})