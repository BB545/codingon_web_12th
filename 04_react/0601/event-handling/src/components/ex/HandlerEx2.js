import { useState } from "react"

export default function HandlerEx2() {
    const [text, setText] = useState('검정색 글씨');
    const [style, setStyle] = useState({});

    function turnRed(text) {
        setText(text)
        setStyle({color: 'red'})
    }

    function turnBlue(text) {
        setText(text)
        setStyle({color: 'blue'})
    }
    return (
        <div>
            <h1 style={style}>{text}</h1>
            <button onClick={() => turnRed('빨간색 글씨')}>빨간색</button>
            <button onClick={() => turnBlue('파란색 글씨')}>파란색</button>
        </div>
    )
}
