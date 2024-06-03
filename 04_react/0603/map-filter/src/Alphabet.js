import { useState } from "react"

export default function Alphabet() {
    // const list = ['a', 'b', 'c', 'd', 'e'];
    // const items = list.map((txt, idx, arr) => {
    //     console.log('txt :', txt);
    //     console.log('idx :', idx);
    //     console.log('arr :', arr);
    //     return txt + idx;
    // });
    // console.log(items);

    const [alphabet, setAlphabet] = useState([
        {
            id: 1,
            txt: 'a'
        },
        {
            id: 2,
            txt: 'p'
        },
        {
            id: 3,
            txt: 'p'
        },
        {
            id: 4,
            txt: 'l'
        },
        {
            id: 5,
            txt: 'e'
        },
    ]);

    const [inputAlpha, setInputAlpha] = useState('');

    const addAlpha = () => {
        // [퀴즈] input의 값이 빈값이라면 alphabet 상태가 변경되지 않도록 하기
        // inputAlpha === ''로 하면 공백만 적어도 입력이 될것이기 떄문에 아래처럼 해주는 게 좋다.
        if (inputAlpha.trim().length === 0) {
            return
        }
        // alphabet 배열에 값 추가
        const newAlpha = alphabet.concat({
            id: alphabet + 1,
            txt: inputAlpha
        });
        setAlphabet(newAlpha);
        setInputAlpha('');
        // input값 비워도 실제 화면에 표시되는 input에는 영향을 주지 않기 때문에 영향을 주려면 value값을 inputAlpha로 state를 관리해줘야한다.
    }

    const deleteAlpha = (targetId) => {
        // 삭제하려고 했던 값을 제외한 값들만 새로운 배열에 담기고 리스트에 출력된다. 따라서 삭제되는 것과 같은 기능
        const newAlpha = alphabet.filter((element) => {
            return element.id !== targetId
        });
        setAlphabet(newAlpha)
    }

    // 받아오는 값이 null일 때 default value 지정할 수 있다
    const value = null || 'default value';

    return (
        <div>
            {/* <ol> */}
            {/* map을 이용한 li 반복 - map에서는 return을 항상 해줘야 값이 반환이 된다. */}
            {/* {list.map((value, index) => {
                    return <li key={index}>{value}</li>;
                })}
            </ol> */}

            {/* 사용자에게 입력받아 배열에 추가 */}
            <input type="text" placeholder="알파벳 입력" value={inputAlpha} onChange={(e) => {
                setInputAlpha(e.target.value);
            }} />
            <button onClick={addAlpha}>Add</button>

            {alphabet.map((value) => {
                // 익명함수로 감싸줄때는 매개변수를 넘겨주고 싶을 때 사용
                return <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>{value.txt}</li>
            })}

            {/* 단축평가 */}
            {alphabet.length === 0 && <div>알파벳을 입력해주세요!</div>}
            {null || <div>값이 정의되지 않았어요!</div>}

            {/* 삼항연산자 */}
            {alphabet.length !== 0 ? (
                alphabet.map((value) => (
                    <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>{value.txt}</li>
                ))
            ) : (
                <div>빈 배열입니다!</div>
            )
            }
        </div>
    )
}
