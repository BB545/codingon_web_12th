var red='red'; //var = 전역 객체, window객체가 불러도 정상 출력됨
let blue="blue"; //window 객체가 부르면 출력x

sayHi(); //만들기도(선언하기 전) 전에 사용했으나 함수이기 때문에 사용가능
function sayHi(){
    console.log('Hi~~~') //window부름에 나옴
}
sayHi();

//호이스팅=var, function은 실행할 때 호이스팅이 된다. 이런 것들은 코드의 맨처음으로 위치를 바꿔서 실행하므로 함수같은 경우에는 선언하기도 전에 실행할 수 있다.