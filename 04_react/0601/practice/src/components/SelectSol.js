import React from 'react'

export default function SelectSol({ setData }) {
    return (
        <>
            과일 :
            <select onChange={(e) => {
                setData((data) => {
                    return { ...data, fruit: e.target.value }
                })
            }}>
                <option value="apple">사과</option>
                <option value="orange">오렌지</option>
                <option value="grape">포도</option>
                <option value="peach">복숭아</option>
            </select>

            배경색 :
            <select onChange={(e) => {
                setData((data) => ({ ...data, background: e.target.value }))
            }}>
                <option value="black">검정</option>
                <option value="white">하양</option>
                <option value="red">빨강</option>
                <option value="orange">주황</option>
                <option value="yellow">노랑</option>
                <option value="green">초록</option>
                <option value="blue">파랑</option>
                <option value="purple">보라</option>
                <option value="pink">분홍</option>
            </select>

            배경색 :
            <select onChange={(e) => {
                setData((data) => ({ ...data, color: e.target.value }))
            }}>
                <option value="black">검정</option>
                <option value="white">하양</option>
                <option value="red">빨강</option>
                <option value="orange">주황</option>
                <option value="yellow">노랑</option>
                <option value="green">초록</option>
                <option value="blue">파랑</option>
                <option value="purple">보라</option>
                <option value="pink">분홍</option>
            </select>
        </>
    )
}
