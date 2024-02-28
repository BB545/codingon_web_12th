//10진수 75를 이진수로 출력

console.log((75).toString()); //10진수
console.log((75).toString(2)); //2진수로 변경

console.log(99+1); //100
console.log('99'+1); //문자+숫자=옆에 이어져서 출력됨

//강제로 데이터 타입을 변경
console.log(typeof parseInt('0')); //'0'은 문자열이지만 parseInt=정수형으로 변경하는 함수
console.log(typeof parseFloat('0')); //parseFloat=실수형으로 변경
console.log((99).toString() + 1); //toString=문자열로 변경