import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function App3() {
    const isVisible = useSelector((state) => {
        console.log(state);
        return state.isVisible;
    })
    return (
        <div>
            <h1>React Redux Ex</h1>
            <h2>isVisible 값은 "{isVisible ? '참' : '거짓'}"이다.</h2>
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
            <button onClick={() => dispatch({ type: 'change' })}>CHANGE</button>
        </div>
    )
}
