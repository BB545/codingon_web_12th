//Date()
//내장함수, 객체
let now = new Date();
console.log(now);
console.log(now.getFullYear())
console.log(now.getMonth()+1,'월')
console.log(now.getDate(), '일')
console.log(now.getHours(), '시')
console.log(now.getMinutes(), '분')
console.log(now.getSeconds(), '초')
console.log(now.getDay()) //0이면 일요일~6이면 토요일

// random()
Math.floor(Math.random()*100)+1
console.log(`1~100 사이 임의의 값음 ${Math.floor(Math.random()*100)+1}`)