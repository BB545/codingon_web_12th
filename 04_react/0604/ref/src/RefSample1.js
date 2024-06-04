import React, { Component } from 'react'

export default class RefSample1 extends Component {
    handleFocus = () => {
        console.log('this', this);
        // input 태그 요소에 직접 접근
        console.log('this.myInput', this.myInput);
        this.myInput.focus();
    }
    render() {
        return (
            <>
                <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
                {/* 1. 콜백함수 - 해당하는 ref 속성을 넘겨주고, 하나의 변수에 저장해 넘겨준다. */}
                {/* 넘겨주는 ref 속성은 이름은 다르게 지정해도 상관없음, 그러나 넘겨주는 속성이름과 변수지정하는 속성이름은 동일하게 해야함 */}
                <input type="text" ref={(ref) => {
                    // 현재 클래스 의미하는 this 꼭 적어줘야하며, 그 다음에 변수 정의
                    // 해당 요소의 ref 속성을 myInput 변수에 넘겨준 것
                    this.myInput = ref;
                }} />
                <button onClick={this.handleFocus}>focus</button>
            </>
        )
    }
}
