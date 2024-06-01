import { Component } from 'react'

export default class HandlerEx extends Component {
    state = {
        msg: 'Hello World!!'
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.setState({ msg: 'Goodbye World!!' })}>클릭</button>
            </div>
        )
    }
}
