// js : jsx 문법을 못 쓰다 보니 html 안에서 변수를 못쓴다.

import { Component } from "react";

class ClassComponent extends Component {
    render() {
        const a = 'aa'
        return <div>{a}</div>
    }
}

export default ClassComponent