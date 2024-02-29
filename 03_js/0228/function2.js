//함수의 길이
//length는
function foo() {
    console.log(foo.length)
}
foo(); //length=0
foo(1,2); //length=0, 매개변수 2개

function bar(x) {
    console.log(x);
}

function baz(x,y) {
    console.log(x,y);
}
console.log(bar.length); //length=1
console.log(baz.length); //length=2
//length는 선언할 때 적은 매개변수 길이, 개수를 나타냄

//return문
function add(x,y) {
    // console.log(`주어진 값들은 x: ${x}, y: ${y} 입니다.`)
    //변수의 값을 표현하고 싶을때, 백틱 안에 `${x}`와 같이 나타내면 된다.
    // console.log(x+y);
    return x+y //계산해서 값을 돌려줌. 출력문은 아니므로 콘솔에 출력은 되지 않음.
}
let result=add(1,2); //return은 출력문이 아니기때문에 결과값을 변수에 저장한 후 따로 변수를 출력문을 통해 출력해준다.
console.log(result)

console.log(add(3,4)); //아니면 바로 함수 결과값을 출력문을 통해 출력하는 것도 가능