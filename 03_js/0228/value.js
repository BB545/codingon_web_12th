//value vs reference
//value
let x=10;
let y=x;
x=20; //x값 변경
console.log(x,y); //20 10 출력

//reference
let a={value: 10}; //10을 가리키는 주소값을 저장
let b=a; //주소값 카피(참조)
console.log(b); 
a.value=20; //a값 변경->참조하는 값이 바뀜, 주소는 바뀌지 않음 => 따라서 같은 주소를 참조하는 b값도 바뀌게 됨
console.log(a,b); //20 20 출력