const fs = require('fs');
fs.readFile('./blog.txt', 'utf-8', (err, data)=>{
    if (err) throw err;

    console.log(data)
});
console.log('Another work');
//순서 바뀜. Another work가 가장 먼저 출력 -> 실행완료 기다리지 않고 계속 실행