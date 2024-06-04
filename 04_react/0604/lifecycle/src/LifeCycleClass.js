import React, { Component } from 'react'
import LifeCycleClassChild from './LifeCycleClassChild'

export default class LifeCycleClass extends Component {
    state = {
        // 컴포넌트 업데이트 확인
        number: 0,
        // 클래스 없어지고 나타나고 상황 만들고 확인
        visible: true
    }

    changeNumber = () => {
        this.setState({ number: this.state.number + 1 })
    }

    changeVisible = () => {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        return (
            <div>
                <button onClick={this.changeNumber}>PLUS</button>
                <button onClick={this.changeVisible}>On/Off</button>
                {this.state.visible && (<LifeCycleClassChild number={this.state.number} />)}
            </div>
        )
    }
}
