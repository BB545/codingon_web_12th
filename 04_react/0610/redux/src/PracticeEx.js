import React from 'react'
import { amountChange, minusMoney, plusMoney } from './store/bankReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function PracticeEx() {
    const money = useSelector((state) => {
        console.log(state);
        return state.bank.money;
    })
    
    return (
        <div>
            <h1>코딩온 은행</h1>
            <h2>잔액 : {money}원</h2>
            <Box1 />
        </div>
    )
}

const Box1 = () => {
    const amount = useSelector((state) => state.bank.amount);
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" value={amount} onChange={(e) => dispatch(amountChange(Number(e.target.value)))} />
            <button onClick={() => dispatch(plusMoney(amount))}>입금</button>
            <button onClick={() => dispatch(minusMoney(amount))}>출금</button>
        </div>
    )
}