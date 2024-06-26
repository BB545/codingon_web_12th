import React from 'react'
import useToggle from '../hooks/useToggle'

export default function Faq() {
    const [isFaqOpen, setIsFaqOpen] = useToggle() // -> 반환값: [value, toggleValue]을 받아서 씀
    return (
        <div>
            <h1>Custom hook (useToggle)</h1>
            <div onClick={setIsFaqOpen}>Q. 리액트에서 커스텀 훅 만들 수 있나요?</div>
            {isFaqOpen && <div>A. 네 가능하죠~</div>}
        </div>
    )
}
