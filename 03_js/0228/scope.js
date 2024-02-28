/**
 * scope(스코프)는 범위라는 뜻으로 { }로 표현한다.
 * 스코프 안에 선언된 변수는 스코프를 벗어나면 소멸된다.
 */

{
const msg='Hello';
//console.log(msg);
}
//console.log(msg); //스코프를 벗어나서 msg선언이 되지 않은 걸로 인식

//var age=20; //var은 스코프가 함수단위라 밖에 정의하든 안에 정의하든 동일함
function showAge() {
    var age=20;
    console.log(age); //대신 콘솔이 밖으로 나가면 에러남
}
showAge();