/**
 * 배열 *****매우중요******
 * 변수도 값을 저장, 배열도 값을 저장
 * 배열은 하나의 이르에 여러개의 값을 저장
 */

let a=10;
a=20;
console.log(a);

let b=[1,2,3,4,5]
console.log(b);
console.log(b[2]);
console.log(b[0]);

let furits=['🍇','🍎','🍊','🍌','🍏']
console.log(furits[0]);
console.log(furits.length) //배열에 몇개가 들어가 있는지

for(let i=0; i<furits.length; i++) {
    console.log(furits[i]);
}

//for~in, for~of
for(let fruit in furits) {
    console.log(furits[fruit]);
}

for(let fruit of furits) {
    console.log(fruit);
}