/**
 * 사용자의 부주의로 입력이 제대로 주어지지 않았을 떄를 대비하여 디폴트 값을 지정한다.
 */

function bank(deposit, rate, year) {
    return deposit*rate/100*year
}
console.log(bank(1000,3.5,5))
// console.log(bank(1000,3.5)) //NaN : 값을 3개입력해야하는데 빠트린 경우 NaN이 뜸

function bank2(deposit, rate, year=5) {
    return deposit*rate/100*year
}
console.log(bank2(1000,3.5,5))
console.log(bank2(1000,3.5)) //기본값 default를 정의해두면 빠트리고 입력받는다 해도 기본적인 값으로 계산이 진행

function printAll(...args) { //변수개수가 달라질 수 있으므로 나머지연산자 ...사용
    // console.log(args)
    // for (let i=0; i<args.length; i++){
    //     console.log(args[i]) //i번째 인덱스
    // }

    for (const item of args)
        console.log(`전달된 매개변수의 값은 ${item}`)
}

printAll('html', 'css', 'js')
printAll('html', 'css', 'js', 'node.js')


function All(...items) {
    for (let i=0; i<items.length; i++){
        console.log(items[i])
    }

    for (let item of items){
        console.log(`전달된 값은 ${item}`)
    }
}

All('html', 'css', 'js')

// 별 만들기
for(let i=5; i>0; i--) {
    for(let j=i; j>0; j--) {
        document.write('⭐');
    }
    document.write('<br>')
}

/**
 * 자동 실행 함수
 * 형식 : ()()
 */
(function() {
    console.log('자동실행')
})(); //이름이 없으니 호출x->자동으로 실행되도록 만들어줌 

//자동실행함수에 매개변수는 두번째 괄호에 넣는다.
(function(a,b) {
    console.log('자동실행',a,b)
})(1,2);