// typescript basic type

// 명시적으로
let a: number = 1;
a = 2;
// a = 'hello'; // type error
console.log(a);

let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null = null;

// 타입 추론 (암묵적으로)
let aa = 1;
let bb = 'hi';
let cc = false;
let dd; // any
let ee = null; // any

// 배열
// let number = [1,2,3,4,5]; // 암묵적으로 배열이라고 인식함
let number: number[] = [1, 2, 3, 4, 5];
// number = ['a'] // type error : string이 배열에 들어갈 수 없다는 에러

// string 배열
// let strArr = ['apple', 'banana', 'kiwi'];
let strArr: string[] = ['apple', 'banana', 'kiwi'];
let strArr2: Array<string> = ['apple', 'banana', 'kiwi'];

// 배열의 원소가 여러 타입일 경우
let arr1: (string | number | boolean)[] = [1, true, 'string'];

// boolean, null, number array 가 원소가 될 수 있는 arr2
let arr2: Array<boolean | null | number[]> = [true, null, [1, 2, 3]];

// object
let obj1: object = {
    name: 'codingon',
    grade: 1,
}