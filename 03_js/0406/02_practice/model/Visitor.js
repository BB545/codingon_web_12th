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
        cb(rows)
    })
}