import React, { useRef, useState } from 'react'

export default function PracticeEx2() {
    const [submit, setSubmit] = useState([
        {
            writer: '민수',
            title: '안뇽',
        },
        {
            writer: '지민',
            title: '하이하이',
        },
        {
            writer: '희수',
            title: '멋쟁이',
        },
    ])

    const writerInput = useRef(null);
    const titleInput = useRef(null);

    const handleFocus = () => {
        if(writerInput.current.value.trim().length === 0){
            writerInput.current.focus();
        } else if(titleInput.current.value.trim().length === 0){
            titleInput.current.focus();
        } else {
            const newInform = submit.concat({
                writer: writerInput.current.value,
                title: titleInput.current.value
            })

            setSubmit(newInform);
            writerInput.current.value = '';
            titleInput.current.value = '';
        }
    }

    return (
        <>
            작성자 : <input type="text" ref={writerInput} />
            제목 : <input type="text" ref={titleInput} />
            <button onClick={handleFocus}>작성</button>

            <table border={1} width={500} style={{ margin: 'auto' }}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {submit.map((value, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.title}</td>
                            <td>{value.writer}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}
