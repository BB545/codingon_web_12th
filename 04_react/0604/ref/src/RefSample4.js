import React, { useRef, useState } from 'react'

export default function RefSample4() {
    // 로컬 변수로 사용
    const idRef = useRef(1);
    const [id, setId] = useState(10);

    const plusIdRef = () => {
        // 버튼을 눌러도 바로 화면에서 바뀌지는 않으나 값은 변하고 있음, state변경해줄 때 화면에 반영이 됨
        // 화면에 바로 반영되지 않아도 되는 변수로 사용할 떄 ref를 로컬 변수로 사용할 수 있다.
        idRef.current += 1;
        console.log(idRef.current);
    }

    const plusIdState = () => {
        setId(id + 1);
    }

    return (
        <div>
            <h3>RefSample4</h3>

            <h4>{idRef.current}</h4>
            <button onClick={plusIdRef}>PLUS Ref</button>

            <h4>{id}</h4>
            <button onClick={plusIdState}>PLUS State</button>
        </div>
    )
}
