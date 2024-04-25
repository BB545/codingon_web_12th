const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'kdt'
})

exports.allVisitorsList = (cb)=>{
    conn.query('SELECT * FROM visitor', (err,rows)=>{
        console.log('SELECT * FROM visitor =>', rows);
        cb(rows)
    })
}

exports.postAddVisitor = (data, cb)=>{
    const sql = 'INSERT INTO visitor (name, comment) VALUES (?,?)';
    const values = [data.name, data.comment];
    conn.query(sql, values, (err,rows)=>{
        console.log('폼에서 보내준 데이터 추가');
        cb(rows.insertId)
    });
}

exports.getShowAvisitor = (id, cb)=>{
    console.log('1명 보기', id);
    const sql = 'SELECT * FROM kdt.visitor where id = ?';
    conn.query(sql, id, (err,rows)=>{
        if(err) throw err;
        cb(rows[0])
    })
}

exports.patchContent = (data,cb)=>{
    const sql = 'UPDATE visitor SET name = ?, comment = ? where id = ?';
    const values = [data.name, data.comment, data.id];
    conn.query(sql, values, (err,rows)=>{
        cb(rows)
    })
}

exports.deletedb = (id,cb)=>{
    const sql = 'DELETE FROM visitor where id = ?';
    conn.query(sql, id, (err,rows)=>{
        cb(rows)
    })
}