/**
 * 매개변수를 갖는 함수
 */

function greeting(surname, lastname='길동') { //값이 없을 떄 디폴트값 지정
    console.log(`Welcome ${surname} ${lastname} 님`)
}
greeting('존') //값이 1개이므로 2번째는 undefined가 뜨게됨
greeting('Kim', 'Gildong')

function sum(a,b) {
    return a+b
}

let result=sum(1,2);
console.log(` 첫번째 결과는 ${result}`) //3

let result1=sum(1,2,3,4);
console.log(` 두번째 결과는 ${result}`) //3 함수의 매개변수를 2개밖에 안줬기 때문에 결과값이 이렇게 나옴

function sum2() {
    console.log(arguments)
    let total=0;
    for(let value of arguments)
        total+=value;

    return total;
}
let result2=sum2(1,2,300,4,6); //매개변수가 정의안되어있어도 입력 값을 파라미터가 받아서 적용함
console.log(result2)

/**
 * ...
 * rest operation
 * (주의) rest는 마지막에 위치해야함.
 */
function addAll(a,b,...args) { //매개변수 2개는 확실히 받을건데 나머지는 몇개를 받을지 모르겠어 알아서 나머지 받아줘 할때 ...사용
    console.log(a,b);
    console.log(args);
}
addAll(1,2,3,4,5,6)