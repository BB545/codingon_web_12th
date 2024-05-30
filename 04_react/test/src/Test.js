import './App.css'

function App(){
    const a = 200;
    const b = 20;
    const user = {name: 'Hong', age: 20}
    const mystyle = {
        backgroundColor: 'gold',
        color: 'red',
        fontSize: '25px'
    }
    return (
        <div className="App">
            {3+5}
            <p>{<span>span 태그입니다</span>}</p>
            <p>{"문자열 허용"}</p>
            <p>{a>b && 'a가 b보다 큽니다'}</p>
            <p>{a>b && '여기에 디폴트 값을 지정해 실행하듯'}</p>
            <p>{Math.floor(Math.random()*10)}</p>
            <p>{user.age}</p>

            <div className='title'>
                아이디: <input type="text" /> <br /><br />
                비밀번호: <input type="password" />
            </div>
            <div style={mystyle}>
                아이디: <input type="text" /> <br /><br />
                비밀번호: <input type="password" />
            </div>
            <div style={{
                backgroundColor: 'blue',
                color: 'white',
                fontSize: '25px'
            }}>
                아이디: <input type="text" /> <br /><br />
                비밀번호: <input type="password" />
            </div>
        </div>
    )
}

export default App;