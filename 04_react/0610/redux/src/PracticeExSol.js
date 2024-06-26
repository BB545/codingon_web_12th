import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './store/bankReducerSol';

export default function PracticeExSol() {
    const [input, setInput] = useState(); // local state
    const money = useSelector((state) => state.bankSol)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>코딩온 은행</h1>
            <h2>잔액 : {money}원</h2>

            <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
            {/* <button onClick={() => dispatch({...deposit() = type: DEPOSIT 같음, payload: Number(input)})}>입금</button> */}
            <button onClick={() => dispatch({...deposit(), payload: Number(input)})}>입금</button>
            <button onClick={() => dispatch({...withdraw(), payload: Number(input)})}>출금</button>
        </div>
    )
}
