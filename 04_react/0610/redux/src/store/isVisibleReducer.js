const initState = true;
const isVisibleReducer = (state = initState, action) => {
    if(action.type === 'change') return !state;
    return state;
}

export default isVisibleReducer;