/**
 * Buffer란
 * 파일을 읽어들이는 방법 중 하나
 * 버퍼링은 파일을 준비하는 과정으로 생각하면 된다.
 * 버퍼는 최소한의 데이터를 모아놓는 장소
 * spinner 등을 이용해 버퍼링 중임을 알려주기도 한다.
 */

/**
 * Buffer에 사용되는 메소드
 * alloc() : 빈 버퍼 생성
 * toString() : 버퍼를 문자열로 변환
 * from() : 문자열을 버퍼로 변경
 */

// 파일 모듈을 이용해서 파일을 읽어오고 버퍼에 들어간 것을 확인할 수 있다.
// const fs = require('fs');
// const data = fs.readFileSync('./demo.txt');
// console.log(data);

// 버퍼의 크기를 할당
// const emptyBuffer = Buffer.alloc(10) // 10바이트
// console.log(emptyBuffer);

// 문자열을 버퍼로
const stringBuffer = Buffer.from('Hello World');
console.log(stringBuffer);
console.log(stringBuffer.toString());