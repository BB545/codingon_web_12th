import PropTypes from 'prop-types'

export default function PropsPractice3({text = '이건 기본 text props입니다', valid}) {
    // valid : 함수 (부모에서 넘겨줄 때 함수를 넘겨준다)
  return (
    <div>
        <div>{text}</div>
        <button onClick={valid}>콘솔메시지</button>
    </div>
  )
}

PropsPractice3.propTypes = {
    text: PropTypes.string.isRequired
}
