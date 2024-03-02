/**
 * 객체 (object)
 */

//객체는 {} 사용, 배열 [], ()
let user={
    name: 'Kim', //key: value
    age: 23,
    address: '서울시 마포구',
    
    //메서드 단축구문 2가지 방법

    // sayHi:function(){
    //     console.log('Hello')
    // }

    sayHi() {
        console.log('Hi~')
    }
}

//객체를 불러오는 방법 dot(.), []
console.log(user.name);
console.log(user['name'])
console.log(user.age);
console.log(user['age'])
console.log(user.address);
console.log(user['address'])
user.sayHi()

//세미콜론(;)은 언제 붙는가?
// {}으로 만든 코드블록에는 세미콜론을 붙이지 않고, 구문의 끝에는 세미콜론을 붙인다.
/**
 * ex. 함수 선언 시
 * function sayHi() {
 *  코드
 * } //여기는 안쓰고
 * 
 * let sayHi=function(){
 *  코드
 * }; //여기는 써야함
 */

let user2={
    name: 'hyun',
    age: 30,
    "like birds": true,
}
// alert(user2["like birds"])
//delete
console.log("before delete",user2)
delete user2["like birds"]
console.log(user2)

// 추가
user2.isAdmin = true;
console.log(user2)

//cosnt는 값을 변경하지 않을 때 사용
//const 내 변수의 값은 변경 가능
const user4={
    name: 'Jhon'
};
console.log(user4.name)
user4.name='Peter'
console.log(user4.name)

//변수를 키로 사용하는 예
// let key='isAdult';
// let user5={
//     name: 'Smith',
//     age: 30,
// };
// console.log(user5)
// user5[key] = false //=== user5['abc']
// console.log(user5)

//계산된 (computed) 프로퍼티
// let user6={
//     name: 'Peter',
//     age: 30,
//     address: '마포구'
// }
// let what=prompt('사용자의 정보', 'name');
// console.log(user6[what])

let fruits=prompt('어떤 과일을 구매', 'apple');
let bag={} //빈 객체를 선언
bag[fruits]=5;
console.log(bag)

//아래의 2 경우는 동일하다. 단축표현식

// function makeuser(name,age) {
//     return {
//         name: name,
//         age: age,
//     }
// }

function makeuser(name,age) {
    return {
        name,
        age,
    }
}

let user7=new makeuser('Smith',30); //선언해둔 함수를 사용하겠다. 생성자 함수 new 활용
let user8=new makeuser('Hong',34);