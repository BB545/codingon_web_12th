const initState = {
    money: 0,
    amount: 0,
}

const PLUS = 'bank/PLUS';
const MINUS = 'bank/MINUS';
const AMOUNT = 'bank/AMOUNT';

export const plusMoney = (amount) => ({
    type: 'bank/PLUS',
    payload: amount
});
export const minusMoney = (amount) => ({
    type: 'bank/MINUS',
    payload: amount
});
export const amountChange = (amount) => ({
    type: 'bank/AMOUNT',
    payload: amount
});

const bankReducer = (state = initState, action) => {
    switch (action.type) {
        case PLUS:
            return { ...state, money: state.money + action.payload }
        case MINUS:
            return { ...state, money: state.money - action.payload }
        case AMOUNT:
            return { ...state, amount: action.payload }
        default:
            return state
    }
}

export default bankReducer;