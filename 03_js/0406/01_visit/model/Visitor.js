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

//새로 작성하는 데이터
exports.postVisitor = (data, cb)=>{
    console.log('model > Visitor.js > postVisitor');
    const sql = 'insert into visitor (name, comment) values (?,?)';
    const values = [data.name, data.comment];

    conn.query(sql, values, (err,rows)=>{
        if(err) throw err;
        console.log('1------>');
        cb(rows.insertid)
    })
}

exports.getVisitor = (id, cb)=>{
    console.log('model > Visitor.js > getVisitor');
    const sql = 'select * from visitor where id=?';
    
    conn.query(sql, [id], (err,rows)=>{
        if(err) throw err;
        console.log('2------>');
        cb(rows[0])
    })
}

exports.patchVisitor = (id, cb)=>{
    console.log('model > Visitor.js > patchVisitor');
    const sql = 'update visitor set name=?, comment=? where id=?';
    const values = [data.name, data.comment, data.id];
    
    conn.query(sql, values, (err,rows)=>{
        if(err) throw err;
        console.log('3------>');
        cb(rows)
    })
}

exports.deleteVisitor = (id, cb)=>{
    console.log('model > Visitor.js > deleteVisitor');
    const sql = 'delete from visitor where id=?';
    
    conn.query(sql, [id], (err,rows)=>{
        if(err) throw err;
        console.log('4------>');
        cb(rows)
    })
}