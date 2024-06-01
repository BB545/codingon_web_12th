import { useState } from "react"

export default function Counter() {
    const [number, setNumber] = useState(0);

    function alertF(msg) {
        console.log(msg);
    }
    function consoleF(e, msg) {
        console.log(e);
        console.log(msg);
    }
    return (
        <div>
            <h1>Function Counter</h1>
            <h2>{number}</h2>
            {/* 함수에 인자가 없으면 함수 이름만 전달 */}
            <button onClick={() => setNumber(number + 1)}>increase</button>
            <button onClick={() => alertF('alert')}>alert 출력</button>
            <button onClick={(e) => consoleF(e, 'console')}>console 출력</button>
        </div>
    )
}
