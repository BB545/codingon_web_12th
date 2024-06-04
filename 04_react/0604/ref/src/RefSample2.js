import React, { Component } from 'react'

export default class RefSample2 extends Component {
    // 변수 지정할 떄 createRef 리액트 내장함수 사용
    myInput = React.createRef();

    handleFocus = () => {
        // createRef 변수는 설정한 DOM에 접근하기 위해서는 this.myInput.current가 접근해야할 요소를 의미함
        // 이번엔 current까지 접근해줘야함
        this.myInput.current.focus();
    }
    render() {
        return (
            <>
                <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
                {/* 2. 내장함수 createRef - 위에서 만든 변수를 ref로 바로 사용 */}
                <input type="text" ref={this.myInput} />
                <button onClick={this.handleFocus}>focus</button>
            </>
        )
    }
}
