import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minus, plus } from './store/counterReducer';

export default function App2() {
    // useState 사용 방법
    // const [number, setNumber] = useState(0);

    // store에 있는 상태를 가져올 때는 useSelector사용 - 여러개의 상태 중 가져오고 싶은 상태만 가져올 수 있음
    const number = useSelector((state) => {
        console.log(state); // counter: {number: 50}
        return state.counter.number;
    })
    return (
        <div>
            <h1>React Redux Ex</h1>
            <h2>number: {number}</h2>
            <Box1 />
        </div>
    )
}

const Box1 = () => {
    return (
        <div>
            <h2>Box1</h2>
            <Box2 />
        </div>
    )
}

const Box2 = () => {
    return (
        <div>
            <h2>Box2</h2>
            <Box3 />
        </div>
    )
}

const Box3 = () => {
    return (
        <div>
            <h2>Box3</h2>
            <Box4 />
        </div>
    )
}

const Box4 = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Box4</h2>
            <button onClick={() => dispatch(plus())}>PLUS</button>
            <button onClick={() => dispatch(minus())}>MINUS</button>
        </div>
    )
}
