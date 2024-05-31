import PropTypes from 'prop-types'

export default function FunctionComponent(props) {
    console.log(props.name);
    return (
        <div>
            <h1>Hi {props.name}</h1>
            <div>여기는 FunctionComponent</div>
            <div>{props.children}</div>
        </div>
    );
}

FunctionComponent.defaultProps = {
    name : '이름'
}

FunctionComponent.propTypes = {
    name: PropTypes.string
}

// export default function FunctionComponent({name}) {
//     // 객체 구조분해할당을 바로 해준 것임
//     console.log(name);
//     return (
//         <div>
//             <h1>Hi {name}</h1>
//             <div>여기는 FunctionComponent</div>
//         </div>
//     );
// }