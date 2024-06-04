import React, { useRef } from 'react'

export default function RefSample3() {
    // 1. ref 객체 만들기
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    }
    return (
        <>
            <p>(함수형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
            {/* 2. 선택하고 싶은 DOM 요소에 ref prop 설정 */}
            <input type="text" ref={inputRef} />
            <button onClick={handleFocus}>focus</button>
        </>
    )
}
