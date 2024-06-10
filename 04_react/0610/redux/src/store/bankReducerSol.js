// 목표 : 은행에서 입금 / 출금 2가지 행위

const DEPOSIT = 'bankSol/DEPOSIT';
const WITHDRAW = 'bankSol/WITHDRAW';

export const deposit = () => ({ type: DEPOSIT });
export const withdraw = () => ({ type: WITHDRAW });

const initState = 0;

const bankReducerSol = (state = initState, action) => {
    switch (action.type) {
        case DEPOSIT:
            return state + action.payload; // 입금
        case WITHDRAW:
            return state - action.payload; // 출금
        default:
            return state;
    }
}

export default bankReducerSol