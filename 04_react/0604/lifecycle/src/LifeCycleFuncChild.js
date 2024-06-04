import React, { useEffect, useState } from 'react'

export default function LifeCycleFuncChild({ number }) {
    const [input, setInput] = useState('');

    // mount 시점에 실행 - 배열 비우기
    useEffect(() => {
        console.log('컴포넌트 마운트');
    }, [])

    // unmount 시점에 실행 - return 적기
    useEffect(() => {
        return () => {
            console.log('컴포넌트 언마운트');
        }
    }, [])

    // mount or update 시점에 실행 - 아무것도 적지x - 모든 업데이트가 되는 경우 다 실행됨
    useEffect(() => {
        console.log('마운트 or 업데이트');
    })

    // input이 업데이트 될 때 실행
    useEffect(() => {
        console.log('input 업데이트');
    }, [input])

    return (
        <div>
            <div>현재 number 값은 {number}</div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    )
}
