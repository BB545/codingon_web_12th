import './App.css'

function App() {
    const name = "Mr.Kim";
    const name1 = "로이";
    const animal1 = "강아지";
    const title = 50;
    return (
        <div className="App">
            {/* 
                jsx 문법
                1.하나로 감싸인 요소
                2. JavaScript 표현식 사용사능
                3. {}로 감싸면 JavaScript를 사용하는거고
                {}안에서 if, for 문 사용하지 못하고 삼항연산자로 사용한다.
            */}
            <div>{name}안녕하세요</div>
            <div>{name1 === "로이" ? '강아지 입니다' : '잘못 아셨네요'}</div>

            <p>{title} | Likes</p>
            <p>제 반려동물의 이름은 {name1}입니다</p>
        </div>
    )
}

export default App;