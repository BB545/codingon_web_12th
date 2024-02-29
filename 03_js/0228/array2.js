/**배열에 사용되는 메서드 */

/**
 * push(): 맨끝에 추가
 * pop(): 맨끝에서 추출 (제거)
 * shift(): 맨앞에서 제거
 * unshift(): 맨앞에서 추가
 * (중요) 원본 배열에 변화 있음.
 */

let arr1=[1,2,3,4,5]
arr1[5]=6;
console.log(arr1)
arr1.push(7)
console.log(arr1)
arr1.pop()
console.log(arr1)
arr1.shift()
console.log(arr1)
arr1.unshift(100)
console.log(arr1)

console.log('-------------')
// console.log(arr1.splice(2,1)) //2번 부터 1개 slice(제거)
// console.log(arr1)
let x=arr1.splice(2,0,'a','b'); //0으로 하면 추가라는 의미, 2번에 'a','b'를 추가해라
console.log(arr1)

//배열을 empty로 만들기
let num1=[10,20,30]
console.log(num1);
num1=[];
console.log(num1);

let num2=[10,20,30]
num2.length=0;
console.log(num2);

//forEach()
let num3=[10,20,30]
// num3.forEach(function(i) {
//     //뭘 할건지 여기에 적음
//     console.log(i)
// })

num3.forEach(i=>console.log(i))
num3.forEach((i,index)=>console.log(i,index))

//배열 합치기
let num4=[1,2,3]
let num5=[4,5,6]
let combined=num4.concat(num5)
console.log(combined)
console.log(num4) //원래값 유지
console.log(num5)

//...: 배열 합치기
let arrayTwo=[...num4, ...num5]
console.log(arrayTwo)

let arrayThree=[...num4, 'a', 'b', ...num5] //추가도 가능
console.log(arrayThree)

//정렬하기, 올림차순, 내림차순
let arr=[1,4,3,2,6,11,9,8,7]
console.log(arr.sort()) //올림차순
console.log(arr.reverse()) //내림차순
//정렬에서 자리수가 달라지면 위의 방법이 적용되지 않는다. 아래와 같이 알고리즘을 하나 만들어주어야한다.
arr.sort((a,b)=>{
    return a>b? 1 : -1 //크기 비교 표시해주는 것, 오름차순, 내림차순은 -1과 1 자리만 바꿔주면 됨
})
console.log(arr)

//문자열을 분리하고 합치기
let str="test";
console.log(str.split(''))
let arr2=['c','o','m']
console.log(arr2.join(':'))
console.log(arr2.join('-'))