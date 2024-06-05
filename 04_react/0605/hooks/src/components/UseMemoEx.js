import { useState, useMemo } from 'react';

export default function UseMemoEx() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');
    
    /* [before]
    const calc = () => {
        console.log('열심히 계산 중...');
        for (let i = 0; i < 10000000; i++) { }
        return count ** 2;
    } */

    /**
     * [after]
     * count 값이 바뀔 때만 함수를 실행하겠다.
     * input 값이 바뀌면 컴포넌트는 리렌더링 되지만, calc 연산되지 않음
     */
    const calc = useMemo(() => {
        console.log('열심히 계산 중...');
        for (let i = 0; i < 10000000; i++) { }
        return count ** 2;
    }, [count])
    
    return (
        <div>
            <h1>UseMemoEx</h1>
            {/* [before] 함수형 컴포넌트가 리렌더링 될 때 다시 전체 호출 되기 떄문에 전혀 상관없는 input값을 바꿔도 계산 값은 변하지 않더라도 계속해서 calc가 연산되어 콘솔 출력이 되는 것을 확인할 수 있다. */}
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>PLUS</button>
            <p>count : {count}</p>

            {/* before */}
            {/* <p>calc : {calc()}</p> */}

            {/* after */}
            <p>clac : {calc}</p>
        </div>
    )
}
