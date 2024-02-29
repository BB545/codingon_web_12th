// 1. 13의 배수 & 홀수
for(let i=0; i<=10000; i++) {
    if(i%13==0 && i%2!=0) {
        console.log(i);
    }
}

// 1. 심화
let max=prompt();
for(let i=0; i<=max; i++) {
    if(i%13==0 && i%2!=0) {
        console.log(i);
    }
}

// 2. 성적 구하기
let mathScore=prompt("수학 점수를 입력 하세요")
let engScore=prompt("영어 점수를 입력 하세요")

let avg=(Number(mathScore)+Number(engScore))/2;

console.log(avg);

// 3. 형변환 실습
let mathScore2='77';
let engScore2='88';

let avgScore=(Number(mathScore2)+Number(engScore2))/2;

console.log(avgScore);

// 4. JS 실습 1
function multifly(a,b) {
    return a*b
}

console.log(multifly(3,7));
console.log(multifly(2,2));

// 5. JS 실습 2
function square(x) {
    console.log(x**2);
}

square(4);
square(11);
square(5);

// 6. if 문 실습
let age=prompt();
if(age<0 || age>100) {
    console.log('잘못된 값입니다.');
}
else if(age>=20) {
    console.log('성인');
}
else if(age>=17 && age<20) {
    console.log('고등학생');
}
else if(age>=14 && age<17) {
    console.log('중학생');
}
else if(age>=8 && age<14) {
    console.log('초등학생');
}
else {
    console.log('유아');
}

// 7. 합계 구하기
function sum() {
    let total=0;
    for (let i=0; i<=100; i++) {
        if(i%2==0 || i%5==0) {
            total += i;
        }
    }
    return total
}

console.log(sum());