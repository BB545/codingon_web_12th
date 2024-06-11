// generic
// 선언할 때 타입을 지정하기 어려운 경우
// - 데이터 타입을 외부에서 지정
// - 생성 시점에 타입을 명시
// => 재사용성 증가
// => 타입을 변수처럼 사용
// <T> 형태로 주로 사용

function numArrLen(arr: number[]): number {
    return arr.length;
}

function stringArrLen(arr: string[]): number {
    return arr.length;
}
// => 같은 일하는 함수 반복 - 비효율
// <T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만든다!
// -> type만 올 수 있다.

function arrLen<T>(arr: T[]): number {
    return arr.length;
}

console.log(arrLen<number>([1, 2, 3]));
console.log(arrLen<string>(['a', 'b', 'c']));
console.log(arrLen<string | number>(['원', 2]));

// 퀴즈)) 빨간 밑줄 사라지도록 함수 완성
function printSome<T>(x: T, y: T) {
    console.log(x, y);
}
printSome<string>('hi', 'hello'); // hi hello
printSome<number>(100, 200); // 100 200
printSome<boolean[]>([true, false], [false, false]); // [true, false]  [false, false]

// 타입이 다를 때
// T : type
// U : usually
function printSome2<T, U>(x: T, y: U) {
    console.log(x, y);
}
printSome2<string, number>('1', 100);