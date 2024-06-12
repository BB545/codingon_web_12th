import React, { useState } from 'react'

interface StudentInfo {
    name: string;
    grade: number;
    part?: string; // optional한 props
    handleClick: (name: string, grade: number, score: number) => void;
}

export default function Student({ name, grade, part, handleClick }: StudentInfo) {
    // 퀴즈) score 점수를 바꿀 수 있는 input 또는 button 만들어서 handleClick 작동시 반영하기
    // generic 사용
    const [score, setScore] = useState<number>(0);
    return (
        <div>
            <ul onClick={() => handleClick(name, grade, score)}>
                <li>이름: {name}</li>
                <li>학년: {grade}</li>
                <li>전공: {part || '자유 전공'}</li>
                <li>점수: <input type="number" onChange={(e) => setScore(Number(e.target.value))} /></li>
            </ul>
        </div>
    )
}
