// 구조 분해 - 배열
const arr1 = [1,2,3,4,5];
const arr2 = ['🍕','🍔','🍟','🌭','🍿'];

const [one, two, three, four, five] = arr1;
console.log(one);
console.log(two);

const [a1,a2,a3,a4,a5] = arr2;
console.log(a1,a2,a3,a4,a5);

const list = ['orange', 'apple'];
const [x,y,alpha='banana'] = list;
console.log(x);
console.log(alpha);

let num1 = 10;
let num2 = 20;
//두개의 변수 값을 교환, 이전엔 제3의 변수가 사용되었으나, 이제는 다음과 같이 간단히 사용할 수 있다.
[num1, num2] = [num2, num1]
console.log("num1", num1);
console.log("num2", num2);


/* 오브젝트


*/

const obj = {
    title: "3 body problems",
    star: 5,
    content: "흥미롭다"
}
console.log(obj.star)
console.log(obj.content)
console.log(obj['title'])

const {c,s,content} = obj; //키의 이름이 달라서 출력 안됨
console.log(content)
const {content: c1, star: c2, title: c3} = obj; //오브젝트 키 이름을 다르게 지정
console.log(c1,c2,c3)


//---------------
const info = {
    name: 'full-stack',
    time: '09~14:00',
    content: "즐겁다"
}
function getInfo(lecture) {
    const {name,time,content} = lecture;
    const output = `${name}강의는 ${time}이고 ${content} !`;
    return output
}

const result = getInfo(info);
console.log(result)

// &&은 and의 의미이고 양쪽 모두 참일 때만 참
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// ||은 or의 의미이고 양쪽 중 하나라도 참일 때 참
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// spread 연산자로 비교
const a = [1,2,3];
const b = [1,2,3];
const result1 = [...a,...b];
console.log("result",result)
const str = "HELLO";
console.log(str); //그냥 문자열 출력
console.log(...str); //spread 연산자 사용하면 글자 각각 분리되어 출력
console.log(str.split('')); // ''안에 공백 없을 때,하나씩 분리돼서 배열로 출력
console.log(str.split(' ')); // ''안에 공백 있을 때, 문자열 하나로 배열에 들어감

const chip = {
    base: 'chip',
    company: 'samsung'
}
const spreatics = {
    ...chip,
    adress: '마포구'
}
console.log(spreatics)