import React, { Component } from 'react'

export default class PracticeEx extends Component {
    state = {
        data: [
            {
                writer: '민수',
                title: '안뇽',
            },
            {
                writer: '지민',
                title: '하이하이',
            },
            {
                writer: '희수',
                title: '멋쟁이',
            },
        ]
    }

    writerInput = React.createRef();
    titleInput = React.createRef();

    handleFocus = () => {
        if (this.writerInput.current.value.trim().length === 0) {
            this.writerInput.current.focus();
        } else if (this.titleInput.current.value.trim().length === 0) {
            this.titleInput.current.focus();
        } else {
            const newInform = this.state.data.concat({
                writer: this.writerInput.current.value,
                title: this.titleInput.current.value
            })

            this.setState({ data: newInform })
            this.writerInput.current.value = '';
            this.titleInput.current.value = '';
        }
    }

    render() {
        return (
            <>
                작성자 : <input type="text" ref={this.writerInput} />
                제목 : <input type="text" ref={this.titleInput} />
                <button onClick={this.handleFocus}>작성</button>

                <table border={1} width={500} style={{ margin: 'auto' }}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((value, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
