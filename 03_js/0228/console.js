// 한줄짜리 주석
/** 
 * 여러줄 주석 
 * 사용할 때 이렇게 사용하시면
 * 됩니다.
 * 주석은 해석(컴파일)되지 않습니다.
 */

/**
 * 콘솔, 브라우저의 콘솔창에 출력
 */
console.log("hyun");
console.log(console);

//시간 계산 (ex. label이 실행되고 끝날때까지의 시간)
console.time("label");
console.timeEnd("label");

//String substitution (문자대용)
console.log("This is a string %s", "hyun");
console.log("이것은 숫자 %i입니다", 32);
console.log("%c This is Large red text", "color:red; font-size:30px;");
console.table({name: "Kim", email: "kim@spreatics.com"});

//브라우저의 경고 표시
function division(x,y) {
    if(y<=0) {
        console.warn('y는 1보다 커야합니다');
    }
    return x-y
}

division(2,-1);