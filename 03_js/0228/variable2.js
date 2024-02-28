//var은 출력문이 먼저 나오고 값이 지정되지 않았는데도 에러가 나는게 아니라 실행을 해버리기 떄문에 문제가 존재
//console.log(x); //출력
//var x=10; //변수 선언 하고 값을 할당

// console.log(y);
// let y=10;

//변수 선언에 초기화가 빠짐 : const=선언+초기화+할당
// const age;
// age=20;

// 변수 var, let, const 를 사용해서 각각 변수 선언과 값을 할당해보시오.
// 변수명 규칙에 맞게, 값은 문자는 "", ''사용
var x=10;
console.log(x);

let y=9;
console.log(y);

const z="숫자"
console.log(z);


// 자료형
let name = 'Kim';
let gender = true; //0이나 1값 true=1 false=0
let finishwork = null; //값이 없음을 명시적으로 나타낼 때
let age; //undefined 변수 선언 후 값이 할당되지 않았음을 의미
// BigInt 는 es6에서 새로 추가된 데이터타입으로 2의 52승 -1보다 크거나 2의 52승 보다 작은 값, 끝에 n을 붙여준다.
//primitive type (value, 원시타입)=값으로 조작, reference type (객체 타입)=참조 주소로 조작