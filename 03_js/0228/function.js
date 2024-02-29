/**
 * 함수선언과 함수 표현식
 */

//clear()=>함수는 기능을 하기 때문에 ()를 반드시 써줘야한다.
//함수를 실행시키려면 반드시 함수이름을 불러야한다.
//함수선언
function sayHello() {
    console.log('Hello');
}
// //함수 사용법
sayHello();

//함수 표현식
//변수의 값으로 함수도 가질 수 있음
let sayHi=function() {
    console.log('🎉');
}
sayHi(); //(주의) 변수지만 함수를 실행시켜야하기 때문에 반드시 함수 형태로 호출

let a=sayHello; //얘는 변수에 함수가 저장되어 있는 것, a출력하면 함수에 대한 정보 출력됨
let b=sayHi(); //얘는 함수를 실행하고 결과값을 변수에 넣었기 때문에 콘솔창에서 b를 출력하면 undefined 출력