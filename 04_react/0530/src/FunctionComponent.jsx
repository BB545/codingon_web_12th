function FunctionComponent() {
    const age = 20;

    console.log([1,2,3,4].map((a)=>a+1))
    // 반복해서 결과값을 배열로 return해주는 map
    const style = {
        color: 'red',
        border: '1px solid black',
        fontSize: '12px'
    }
    return <>
        <h1
            style={style}
            onClick={checkAge}
        >함수형 컴포넌트입니다.</h1>
        <p className="pClass">
            {/* 1. 삼항연산자 사용 */}
            {age <20 ? '미성년자' : '성인'}

            {/* 2. 함수 사용 : 함수형 컴포넌트 처럼 사용됨 (ReactNode를 return) */}
            {checkAge(age)}
        </p>
    </>

    function checkAge(age) {
        if(age > 20) return '20세 이상'
        else if(age > 10) return '10세 이상'

        console.log('나이 체크')
    }
}

export default FunctionComponent