import React, { Component } from 'react'

export default class LifeCycleClassChild extends Component {
    // 호출안해도 알아서 실행됨 - 화살표함수로 작성하지 않아도됨
    componentDidMount() {
        console.log('컴포넌트 마운트');
    }
    componentDidUpdate() {
        console.log('컴포넌트 업데이트');
    }
    componentWillUnmount() {
        console.log('컴포넌트 언마운트');
    }

    render() {
        return (
            <div>현재 number 값은 {this.props.number}</div>
        )
    }
}
