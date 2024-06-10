// store는 하나지만 reducer와 상태는 여러개일 수 있음
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isVisibleReducer from "./isVisibleReducer";
import bankReducer from "./bankReducer";

// combineReducers : 여러개의 리듀서를 하나로 합침
const rootReducer = combineReducers({
    // key : value 형태로 들어감
    counter: counterReducer,
    isVisible: isVisibleReducer,
    bank: bankReducer,
})

export default rootReducer;