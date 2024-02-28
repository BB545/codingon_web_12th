/**
 * 연산자 종류
 * 산술연산자 : + , - , * , / , % , ** , ++ , -- , += , -= , *= , /=
 * 대입연산자
 * 비교연산자
 * 삼항연산자
 * 논리연산자
 */

console.log(1+1);
console.log(10-1);
console.log(10*2);
console.log(10/2);
console.log(10%2); //나머지 연산자

console.log(64%3); //나머지는 0, 1, 2외에는 나오지 않는다.

console.log('--------비교연산자');
console.log(1==1);
console.log(1==2);
console.log(1!=1);
console.log(1!=2);
console.log("'1'==1", '1'==1); //값이 같으면 같다라고 표시, 데이터타입은 상관x
console.log("'1'===1", '1'===1); //값과 데이터타입까지 같아야됨

console.log("'1'!==1", '1'!==1);
console.log("'1'!==1", '1'!==1);

console.log('-----------');
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log('&& (and), || (or)');
console.log(true&&true); //하나라도 false이면 false
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

console.log(true||true); //둘중 하나만 참이어도 참
console.log(true||false);
console.log(false||true);
console.log(false||false);

console.log(!(2>1));
console.log(!(2<1));

console.log('0'==false);
console.log(''==0); //아무것도 안적으면 0으로 인식

//자동증가++ 자동감소--
let num=10;
// console.log(num++); //num을 콘솔에 출력한 뒤에 증가
// console.log(++num); //증가 후 num출력
// console.log(--num);
console.log(num--);
console.log(num);

//+= , -= , *= , /=
let x=10;
// x=x+10;
x+=10; //위의 계산식을 축약해서 쓴것
console.log("x: ", x)

//falsy
console.log('---------falsy가 되는 경우---------');
console.log(false||true);
console.log(false||'Jhon'); //결과=Jhon 앞의 결과가 없으면 출력하는 값
console.log(false||1); //결과=1

//let userColor = 'red';
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor||defaultColor; //user값이 없으면 default값이 반환
console.log('현재 컬러는: ', currentColor); //결과=red