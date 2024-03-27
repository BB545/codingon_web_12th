function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('🚗')
    }
}

const c = new Circle(1);
console.log(c)
c.draw();

// 위의 코들르 es6 클래스로 바꿔보면
class Circle1{
    constructor (radius){
        this.radius = radius
    }
    draw(){
        console.log('🚗')
    }
}
const d = new Circle1(1);
console.log(d)
d.draw();