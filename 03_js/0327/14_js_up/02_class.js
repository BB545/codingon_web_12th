// const today = new Date();

//클래스의 기본 형식
// class Car{
//     constructor () {

//     }
//     method1(){}
//     method2(){}
//     method3(){}
// }

class User {
    constructor(name) {
        this.name = name;
    }
    sayHi(){
        console.log(`${this.name}, hello`)
    }
}
let user = new User('Smith');
user.sayHi();
let user1 = new User('Peter');
user1.sayHi();

//함수로도 클래스 형성 가능
function user(name){
    this.name=name;
}
User.prototype.sayHi=function(){
    console.log(this.name)
}
let user2 = new User('John');
user2.sayHi();