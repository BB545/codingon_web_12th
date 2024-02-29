/**
 * 반복문 : what? 무엇을 반복해야하는지?, 몇번 반복해야하는지?
 */
// for (변수를 이용해서 몇번을 반복할지 결정) 반복해야하는 코드

for (let i=0; i<10; i++) //i가 0부터 시작해서 10보다 작을 동안 반복
    console.log(i, '❤️');

for (let i=10; i>0; i--)
    console.log(i, '❤️');

for (let i=0; i<10; i++) {
    if (i%2 == 0)
        console.log(i)
}
console.log('---------------')

for (let i=0; i<10; i++) {
    if (i%2 != 0)
        console.log(i)
}

//문제 3의 배수만 출력 0~50사이의 값
for (let i=0; i<50; i++) {
    if (i%3==0 && i!=0)
        console.log(i);
}

//while문 형식 : while(조건) 코드;
let j=0;
while (j<5) {
    console.log(j);
    j++; //반드시 조건을 변경하는 명령을 줘야한다.
}

//do~while은 while문과 거의 동일하지만 do때문에 무조건 1번은 실행한다.
// do{
//     코드;
// } while(j<5)


//차이점 명확히 구분하기
//for~in
const foods=['🍕','🍔','🍟'];
for(let i in foods) //i는 foods가 있는 순서, 내용 가져오려면 배열을 불러와야함.
    console.log(i, foods[i])

//for~of : of는 내용자체를 가져오기때문에 배열을 불러올 필요가 없다.
const colors=['🍕','🍔','🍟'];
for(let color of colors)
    console.log(color)