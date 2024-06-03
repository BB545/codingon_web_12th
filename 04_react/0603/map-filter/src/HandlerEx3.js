import { useState } from "react"

export default function HandlerEx3() {
    const [display, changeDisplay] = useState(true);

    function setDisplay() {
        changeDisplay(!display)
    }

    return (
        <div>
            <button onClick={setDisplay}>{display ? '사라져라' : '보여라'}</button>
            <h1>{display ? '안녕하세요' : ''}</h1>
        </div>
    )
}
