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

let sql = 'select * from customer';
conn.query(sql, function(err, rows, fields){
    if(err) console.log(err.message);
    else {
        console.log('연결 성공');
        console.log(rows[0].custname);
        console.log(fields[0]);
    }
})

conn.end();
app.listen(8000, ()=>{
    console.log('8000 server running...'+'mysql running...');
})