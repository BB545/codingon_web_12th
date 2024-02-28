// true, false 확인하기
console.log(true == 1); //결과값이 맞으면 true, 틀리면 false출력
console.log(false == 0); //결과값 맞으므로 true 출력

let big = 999999999999999; //15자리
console.log(big);

let big2 = 9999999999999999; //16자리
console.log(big2);

// 제일 큰 값 제일 작은 값 알아보기
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//Boolean 알아보기 : 이 세상의 값 중 단 3가지 상태로 표현할 수 있는 값에 사용
console.log(10>1);
console.log(10>11); //결과값이 틀리므로 false 출력

//null
let somebody=null; //값이 없음을 명시적으로 정해줌
console.log(somebody);

let somebody2;
console.log(somebody2); //값을 명시하지 않았으므로 undefined출력

//심볼 : 유일무이한 값을 만들 때 사용
console.log('심볼 ---------------');
const a1="1";
const a2="2";
console.log(a1==a2);

const b1=Symbol('1');
const b2=Symbol('1');
console.log(b1==b2); //false => 심볼에서는 값이 같더라도 별개의 것으로 만듬(딱하나만 존재해야하는 경우)

//BigInt 값을 만들려면
let num=3945948687n;
//데이터 타입을 알아보는 명령어 typeof
console.log(typeof num);
//문자열의 데이터 타입
let surname="Kim";
console.log(typeof surname);

let age=30;
console.log(typeof age);

let isMale=false;
console.log(typeof isMale);

let selectColor=undefined;
console.log(typeof selectColor);

let selectFont=null;
console.log(typeof selectFont); //object로 표시됨=>브라우저의 히스토리 때문에 이렇게됨..원래는 null로 나와야 맞다.


//infinity
let x=Infinity;
let y=-Infinity;
console.log(x, y, typeof(x), typeof(y));