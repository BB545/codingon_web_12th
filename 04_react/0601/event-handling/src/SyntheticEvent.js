export default function SyntheticEvent() {
    function syntheticEvent(e) {
        console.log('SyntheticEvent Btn Click');
        console.log(e);
        // 콘솔에 기록되는 e 객체는 syntheticEvent(합성 이벤트)
        // : 리액트가 DOM이 아니라 Virtual DOM을 사용하는 것처럼
        // 웹 브라우저의 nativeEvent가 아닌 이거를 감싸고 있는 합성이벤트를 사용
    }

    function printInputValue(e) {
        console.log(e.target.value);
    }
    return (
        <div>
            <button onClick={syntheticEvent}>Synthetic 콘솔에 찍기</button>
            <br />

            {/* input값의 변화를 보고 싶을 때 */}
            <input type="text" onChange={printInputValue} />
        </div>
    )
}
