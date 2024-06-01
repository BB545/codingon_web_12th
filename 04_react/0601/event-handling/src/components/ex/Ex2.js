import React from 'react'

export default function Ex2() {
    const [textInfo, changeTextInfo] = useState({
        color: 'black',
        text: "검정색",
    });
    const handleText = (color, e) => {
        //color, text 내용 둘다 변경
        changeTextInfo({ color: color, text: e.target.innerText })
    }
    return (
        <div>
            <h1 style={{ color: textInfo.color }}>{textInfo.text} 글씨</h1>
            <button onClick={(e) => handleText('red', e)}>빨간색</button>
            <button onClick={(e) => handleText('blue', e)}>파란색</button>

        </div>
    )

}
