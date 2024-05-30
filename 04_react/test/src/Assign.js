function App(){
    const name = '노현희'
    const mystyle = {
        fontSize: '20px',
        fontWeight: 'bold'
    }
    const a = 100;
    const b = 50;
    return (
        <div className="App">
            <p style={{
                backgroundColor: 'yellow',
                fontWeight: 'bold'
            }}>자기소개</p>
            <p style={mystyle}>안녕하세요. 제 이름은 {name}입니다.</p>
            <p>나이는 {20+5}입니다.</p>
            <p>{a>b && '100은 50보다 큽니다.'}</p>
            <p>숫자게임 : {Math.floor(Math.random()*10)}</p> 
        </div>
    )
}

export default App;