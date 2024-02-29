/**
 * 화살표 연산자
 * 아래 3개 함수의 기능은 동일하고 표현방식만
 */

// function add(x,y) {
//     return x+y
// }
// let result=add(x,y);

// let result=function() {
//     return x+y
// }

let result=()=>{
    return x+y
}

/**
 * 함수 표현식 이해하기
 * () => { 코드 } : 매개변수가 없을 때 사용
 * x => { 코드 } : 매개변수가 x라고 할때
 * (x,y) => { 코드 } : 매개변수가 여러개일 때
 */

//es5

// let pow=function(x) {
//     return x*x;
// }

//es6
let pow=x => x*x;