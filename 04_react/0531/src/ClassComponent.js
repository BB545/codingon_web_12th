import { Component } from "react";
import PropTypes from 'prop-types'

class ClassComponent extends Component {
    render() {
        const {name, children} = this.props; // 구조분해할당
        return (
            <div>
                <h1>Hi {this.props.name}</h1>
                <h1>Hi {name}</h1>
                <div>여기는 ClassComponent</div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

// ClassComponent.defaultProps = {
//     name : '기본 이름'
// }

ClassComponent.propTypes = {
    // name: PropTypes.string,
    // 필수값 지정
    name: PropTypes.string.isRequired
}

export default ClassComponent;