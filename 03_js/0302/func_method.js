/**
 * 배열에 사용되는 함수들
 * map()
 * filter()
 * reduce()
 * every()
 * find()
 */

//filter() : 조건에 맞는 요소만 다시 내가 받음
let arr1=[3,6,1,2,8,9]

//배열로 인해 자동으로 모든 값이 들어가지기 떄문에 반복문이 필요없다.
arr1=arr1.filter(function(num){
    return num>3 //조건에 맞을 때만 반환
})
console.log(arr1)

let arr2=['apple', 'pineapple', 'grape', 'banana'];
arr2=arr2.filter(function(fruit){
    return fruit.length>=6
})
console.log(arr2)

//find() : 조건에 맞는 첫번째 요소를 찾는다.
let arr3=[10,20,30,40]
result=arr3.find(function(num){
    return num>20
})
console.log(result)

//filter().map() 함께 - 체이닝 방식
const arr4=[1,2,-3,4,5]
let printStr=arr4.filter(item => item>0).map(item => "<li>" + item + "</li>");
console.log(printStr)
document.write(printStr)

//every(): 배열의 모든 조건이 충족하는지 확인
// const arr5=[1,2,-3]; //false
const arr5=[1,2,3]; //true
let result1=arr5.every(function(item){
    return item>=0
})
console.log(result1)

//reduce(): 합계를 갖는 변수, 현재값
let arr6=[1,3,4,7];
let result2=arr6.reduce((acc, currentValue)=>{
    return acc+currentValue
}, 0)
console.log(result2)

//같은 숫자가 몇개 있는지 알아내기
const number=[1,2,3,4,1];
function countOcc(array, searchEle){
    let result3=array.filter(item => item === searchEle);
    console.log(result3)
    return result3.length //개수만 알면되므로 length return
}

console.log(countOcc(number,6));