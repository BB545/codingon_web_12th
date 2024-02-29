/**
 * 조건문 : 주어진 조건에 따라 true, false 일때
 * 각각 다른 코드를 실행하게 한다.
 * 
 * 기본형식 
 * if(조건식)
 *  한줄 코드;
 * 
 * if(조건식) {
 *  여러줄 코드를 실행
 * }
 * 
 * if(조건식) {
 *  조건에 만족할 경우 실행할 코드
 * } else {
 *  조건에 불만족할 경우 실행할 코드
 * }
 * 
 * if(조건식) {
 *  코드;
 * } else if(조건) {
 *
 * }
 * 불만족 시 계속해서 비교문을 연결할 수 있다.
 */

let hour=14;
if (hour >= 6 && hour < 12) {
    console.log('good morning');
    console.log('오전시간입니다.')
} else if (hour >= 12 && hour < 18) {
    console.log('good afternoon');
    console.log('오후시간입니다.')
} else
    console.log('저녁시간입니다.')


//switch문 (주의) 조건인 변수의 내용은 조건을 줄 수 없음. 그러나 절대 안되는 것음 아님.
/**
 * switch(변수)
 * case '값': 코드; break;
 * case '값': 코드; break;
 * case '값': 코드; break;
 * ...
 * default: 코드; //default에는 값을 쓰지 않는다.
 */

let role="hong";
switch(role) {
    case 'guest':
        console.log('당신은 게스트입니다.');
        break; //이 조건에 맞으면 실행을 중지해. 불필요한 다른 조건을 수행하지 않아도돼.
    case 'master':
        console.log('당신은 마스터입니다.');
        break;
    case 'owner':
        console.log('당신은 오너입니다.');
        break;
    default:
        console.log('누구세요??');
}


//문제 switch문을 if문으로 바꿔서 실행해보시오.
let role2='guest';
if (role2==='guest')
    console.log('당신은 게스트입니다.')
else if (role2==='master')
    console.log('당신은 마스터입니다.')
else
    console.log('누구세요??')