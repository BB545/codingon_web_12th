class Circle2 {
    constructor(radius){
        this.radius = radius;
    }
    draw(){
        console.log('⭐')
    }
} //클래스 선언, 틀

const a = new Circle2(1); //인스턴스 생성, 매개변수값도 줌
console.log(a)
a.draw(); //클래스 Circle2의 메서드를 사용


class Circle3 {
    constructor(radius){
        this.radius = radius;
        this.move = function(){
            console.log('🔔')
        } //constructor에 메서드 선언
    }
    draw(){
        console.log('👍')
    }
}

const b = new Circle3(1);
console.log(b) //constructor에 메서드 선언하면, 인스턴스 내용 찍어라 하면 메서드가 같이 출력됨
b.draw();