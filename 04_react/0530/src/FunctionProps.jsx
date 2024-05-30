// props : properties 를 줄인 표현 -> 컴포넌트에 속성을 설정
// > 값을 전달할 때 사용 (컴포넌트 끼리 값을 전달하는 수단)
// > 단방향 (상위 -> 하위)
import PropTypes from 'prop-types'

// 기본 값을 props에 직접 지정하는 것이 더 좋다
function FunctionProps({name = '이름', lunch = '점심'}) {
    return <>
        <p>{name}</p>
        <p>{lunch}</p>
    </>
}

// 값이 없을때 기본값 지정
// FunctionProps.defaultProps = {
//     name: '이름',
//     lunch: '점심'
// }

// 타입 기본 값 설정
// FunctionProps.propTypes = {
//     name: PropTypes.string,
//     lunch: PropTypes.string
// }

export default FunctionProps