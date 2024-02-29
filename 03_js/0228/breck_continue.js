/**
 * break는 for 문을 벗어나게 한다.
 * continue는 현재 진행하고 있는 loop를 건너뛰고 다음 loop를 진행하여 for문으로 올라간다.
 */

//break문
for(let i=0; i<10; i++) {
    if(i==5) {
        break; //for문 벗어남
    }
    console.log(i)
}

//continue문
for(let i=0; i<10; i++) {
    if(i==5) {
        continue; //진행 조건 건너뛰고(console.log(i)진행안됨) 다시 for문으로 가서 다음 loop진행
    }
    console.log(i)
}