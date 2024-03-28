class House{
    //매개변수 줘야하는 갯수와 정보는 constructor 확인
    constructor(year,name,windows){
        this.year=year;
        this.name=name;
        this.windows=windows;
    }
    getAge(){
        console.log(`${this.name}는 건축한 지 ${this.year}년입니다.`)
    }
    getWindow(){
        console.log(`창문의 갯수는 ${this.windows}개입니다.`)
    }
}

const house1 = new House(2010, '마이홈', 5);
house1.getAge(); //메서드 사용
console.log(house1.name) //하나의 속성만 출력하기

/**
 * 상속
 * extends 사용
 * 부모로부터
 */
//House에 있는 애를 물려받을 것임
class Apartment extends House{
    constructor(year, name, windows, floor){
        super(year, name, windows); //부모에게서 받아오는 변수, 매개변수에도 언급해줘야함
        this.floor = floor;
    }
    getFloor(){
        return `${this.year} 년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}`
    }
    //메서드 이름이 똑같으면 부모는 무시하고 현재에 선언된 메서드 이용 (override 오버라이드)
    getAge(){
        super.getAge(); //부모 메서드도 사용
        console.log(`새로운 ${2024-this.year}년된 아파트는 총 ${this.floor}층 입니다.`)
    }
}

const apt1 = new Apartment(2020, '레미안', 100, 15);
console.log(apt1)
console.log(apt1.getFloor()) //메서드가 return만 하고 있기 때문에 콘솔 출력 명령 써줌
apt1.getAge();


//-------------------
/**
 * 가로, 세로
 * 면적 구하는 메서드
 */
class Shape{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    calcAB(){
        return this.ab = this.a*this.b
    }
    move(){
        console.log('move')
    }
}

const calc=new Shape(5,4);
console.log(calc.calcAB())

/**
 * 자식 Circle 클래스 생성
 * move()메서드 출력 시 'move > circle'
 */

class Circle extends Shape{
    constructor(a,b){
        super(a,b);
    }
    move(){
        console.log('move > circle')
    }
}

const circle = new Circle(1,2);
circle.move();