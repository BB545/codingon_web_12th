import { Component } from "react";

class Counter extends Component {
    state = {
        number: 0,
    };

    render() {
        const { number } = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <button onClick={() => {
                    // this.setState() : state값을 바꾸는 함수
                    // State값 직접 변경 불가능
                    this.setState({
                        number: 2,
                    })
                }}>number 2</button>

                <button onClick={() => {
                    this.setState({ number: number + 1 })
                }}>+1</button>

                <button onClick={() => {
                    this.setState((prevState) => {
                        // 이전 값을 사용
                        return {
                            number : prevState.number + 2,
                        }
                    })
                }}>+2</button>
            </div>
        )
    }
}

export default Counter;