const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'kdt'
})

exports.getVisitors = (cb)=>{
    conn.query('select * from visitor', (err,rows)=>{
        if(err) throw err;
        console.log('model > Visitor.js > getVisitors', rows);
        cb(rows) //데이터 보내서 받아야 하므로 콜백함수로 보냄
    })
}