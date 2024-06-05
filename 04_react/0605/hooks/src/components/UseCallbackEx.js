import { useState, useCallback } from 'react';

export default function UseCallbackEx() {
    const [text, setText] = useState('');

    /* [before] const onChangeText = (e) => {
        setText(e.target.value)
    } */

    // [after]
    // useCallback 훅으로 함수를 기억
    // 컴포넌트 리렌더링 되어도, 의존성 배열에 있는 값이 바뀌지 않는 한 기존 함수를 재사용
    // 눈에는 보이지 않으나 메모리에 함수가 기억되고 있음
    const onChangeText = useCallback((e) => {
        // 함수를 다시 만들어줘야할 필요가 없다. 따라서 []배열을 비워둬도 된다.
        setText(e.target.value)
    }, [])

    return (
        <div>
            <h1>UseCallbackEx</h1>
            <input type="text" onChange={onChangeText} />
            <div>작성한 값 : {text || '없음'}</div>
        </div>
    )
}
