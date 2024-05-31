import { useState } from "react";

const SayFunction = () => {
    console.log(useState('welcome!')); // ['welcome!', f()]
    const [message, setMessage] = useState('welcome!');
    //  useState(초기값)
    // message : 메시지 상태 => state 변수
    // setMessage : message state 값을 바꾸는 함수

    const onClickEnter = () => {
        setMessage('안녕하세요~')
    }

    const onClickEnterLeave = () => {
        setMessage('안녕히가세요~')
    }

    return (
        /**
         * react에서는 함수 호출 시 괄호 X
         * - HTML : onclick="onclick()" -> 문자열 형식으로 호출문 등록
         * - JS : addEventListener('click', onclick) -> 괄호를 붙이면 함수가 바로 실행되므로 클릭이 발생했을 떄 함수가 호출되도록 한다.
         * - react : onclick = {onclick()} -> 괄호를 없애서 클릭이 발생했을떄 함수가 호출되도록
         */
        <div>
            <h1>{message}</h1>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickEnterLeave}>퇴장</button>
        </div>
    )
}

export default SayFunction;