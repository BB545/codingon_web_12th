import React, { useReducer } from 'react'

// 다른 파일에 있다고 가정 (외부로 로직 빼기)
// const initState = 0; // 초기 상태값
const initState = { value: 0 }; // 객체 형태로 존재한다면, 초기 상태값

const reducer = (prevState, action) => {
    // action: '~~'
    console.log(action);
    // action: {type: '~~', ...}
    // action을 객체형태로 써주었으므로 action.type으로 바꿔주어야 제대로 작동함
    switch (action.type) {
        case 'INCREMENT':
            // return prevState + 1;
            return { value: prevState.value + 1 }; // 객체 형태 일때
        case 'DECREMENT':
            // return prevState - 1;
            return { value: prevState.value - 1 };
        case 'RESET':
            // return initState;
            return { value: 0 }; // or initState자체가 객체니까 initState로 써도 됨
        default:
            return prevState;

    }
}

export default function UseReducerEx() {
    // reducer : state를 업데이트 하는 함수
    // dispatch : action을 발생시킴 (state가 어떻게 변경되어야 하는지에 대한 힌트)
    // state : 현재 상태
    // useReducer는 [state, dispatch]를 리턴함
    const [state, dispatch] = useReducer(reducer, initState);

    // const increment = () => dispatch('INCREMENT');
    // const decrement = () => dispatch('DECREMENT');
    // const reset = () => dispatch('RESET');

    // 객체형태로 해줄 수도 있음 - 원하는 정보를 같이 넘겨줄 수 있다.
    // ex. { type: 'INCREMENT', input: '~~~~' }
    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });
    const reset = () => dispatch({ type: 'RESET' });

    return (
        <div>
            <h1>UseReducerEx</h1>

            {/* <h2>{state}</h2> */}
            <h2>{state.value}</h2>
            <button onClick={increment}>Plus</button>
            <button onClick={decrement}>Minus</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
