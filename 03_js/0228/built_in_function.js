//random() : 0~1 사이값을 임의로 추출한다.
console.log(Math.random())
console.log(Math.round(0.9))
console.log(Math.round(5.95), Math.round(5.5), Math.round(0.05))
console.log(Math.round(-5.05))
//최종값, 최소값
console.log(Math.max(1,3,2)) //주어진 값 중 가장 큰값
console.log(Math.min(1,3,2)) //주어진 값 중 가장 작은 값

console.log('--------문자열 함수')
let msg="This is my first message";
let result1=msg.includes('my') // true //포함하니
let result2=msg.includes('your') //false //포함하니
let result3=msg.startsWith('This')// true //시작하니
let result4=msg.startsWith('this')//false //시작하니
let result5=msg.endsWith('e') // true //e로 끝나니
let result6=msg.indexOf('my') // 8 //순서 몇번째
let result7=msg.replace('first', 'second') //first를 second로 바꿔줘
let result8=msg.toUpperCase() //다 대문자로 바꿔줘

console.log(result1, result2, result3, result4)
console.log(result5, result6, result7, result8)