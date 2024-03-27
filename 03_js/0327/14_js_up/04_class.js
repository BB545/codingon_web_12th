/*
클래스 : 객체를 생성하기 위한 틀
1. 집이라는 클래스
2. 속성 : 연도, 집 이름, 창문 갯수
3. 메소드 : 창문 갯수를 출력, 집 이름 출력하는 메소드
*/

//클래스 정의
class House{
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
const apt = new House(2008, '아파트',10);
console.log(apt.name);
apt.getAge();
apt.getWindow();