// void : 리턴이 없는 함수 - 생략해도 되고, 명시해도 된다
// 선택적 매개변수는 맨 뒤에 있어야함
function print(a: number, b: number, c?: number): void {
    console.log('print() 함수 출력 결과');
    console.log(a);
    console.log(b);
    console.log(c);
}

print(2, 4, 5);
print(2, 4); // 2, 4, undefined

// 기본값 할당도 가능
function print2(a: number, b: number, c = 100): void {
    console.log('print2() 함수 출력 결과');
    console.log(a);
    console.log(b);
    console.log(c);
}

print2(2, 4, 5);
print2(2, 4);

// void가 아닌 자료형을 리턴하는 함수
function sayHello(): string {
    return 'HI~'
}

console.log(sayHello())

// 화살표 함수 & 리턴 생략 -> 한줄일때
const squareArea = (x: number, y: number): number => x * y;

console.log(squareArea(4, 10));

// interface 정의 시 함수 타입 표현
interface Greet {
    name: string;
    hi(): string;
    bye(a: number): string;
}

const codingon: Greet = {
    name: '철수',
    hi() {
        return '나는 ' + this.name + '이다.';
    },
    bye(a: number) {
        return `작별 인사를 ${a}번 했습니다.`;
    },
}

console.log(codingon.hi());
console.log(codingon.bye(3));

// never : 함수의 끝에 절대 도달하지 않는 경우
function goingon(): never {
    while (true) {
        console.log('go!');
        // break; 가 있으면 무한이 아니기 떄문에 never 자료형을 가질 수 없음
    }
}