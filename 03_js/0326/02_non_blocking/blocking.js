const fs = require('fs');
const data = fs.readFileSync('./blog.txt', 'utf-8');
console.log(data);
console.log('Another work');
// 써있는 순서대로 출력 -> 모두 실행될 때까지 기다리므로