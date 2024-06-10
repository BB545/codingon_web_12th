// state 초기값 정의
const initState = {
    number: 50,
};

// 문자열로 정의하는 대신 변수 정의. counterReducer에서만 사용하는 변수가 된다. 중복되지 않음
const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

// 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 함수 사용
export const plus = () => ({ type: 'counter/PLUS' });
export const minus = () => ({ type: 'counter/MINUS' });

// reducer 정의: 상태변화를 실질적으로 일으켜주는 함수
const counterReducer = (state = initState, action) => {
    switch(action.type){
        case PLUS:
            return {number: state.number + 1}
        case MINUS:
            return {number: state.number - 1}
        default:
            return state
    }
}

export default counterReducer;