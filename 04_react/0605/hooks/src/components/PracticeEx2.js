import { useCallback, useState } from "react"

export default function PracticeEx2() {
    const [list, setList] = useState([
        'item1',
        'item2',
        'item3',
        'item1'
    ]);
    // true, false로 하면 모든 input에 해당 값을 넣어줌. 따라서 item1을 예로 들면 모든 input이 편집상태가 되고, 편집 input에 모두 item1이 들어감.
    // 각각 편집 상태를 제어하고 싶으면, value값을 이용해서 비교해줘야함
    // const [isEdit, setIsEdit] = useState(false);
    const [isEdit, setIsEdit] = useState(null);
    const [editText, setEditText] = useState('');

    const EditBtn = useCallback((value, idx) => {
        // setIsEdit(true);
        // setIsEdit(value);
        setIsEdit(idx);
        setEditText(value);
    }, [])

    // editText 입력한 값이 처음엔 없었던 값이므로 값을 새로 저장해주어야함. 따라서 확인해야하기 때문에 의존 배열로 저장해야한다.
    // editText 변수의 값은 변경되는 값
    const SaveBtn = useCallback(() => {
        setList(list.map((value, idx) => (idx === isEdit ? editText : value)));
        setIsEdit(null);
    }, [editText])

    // 의존배열이 비어있어도 작동되나, 조건에 3개의 의존배열은 다 달라야한다고 되어 있기도 하고, 수정하거나 어떤 경우에는 삭제가 동작하지 않는 경우가 있다. -> idx와 비교하고 있기 때문
    // 따라서 list를 의존 배열에 다시 넣어주어서 확인해야한다
    const DelBtn = useCallback((delList) => {
        setList(list.filter((value, idx) => idx !== delList))
    }, [list])

    return (
        <div>
            <ul>
                {list.map((value, idx) => (
                    <li key={idx}>
                        {isEdit === idx ? (
                            <div>
                                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                                <button onClick={SaveBtn}>Save</button>
                            </div>
                        ) : (
                            <div>
                                <span>{value}</span>
                                {/* value는 내부에서만 사용되는 요소이기 때문에 매개변수로 전달해줘야함 */}
                                {/* value만 넘기면 같은 문자열에 대해 또 똑같은 동작이 실행됨 - idx를 넘겨서 모두 다르게 동작하도록 해줌 */}
                                <button onClick={() => EditBtn(value, idx)}>Edit</button>
                                <button onClick={() => DelBtn(idx)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}
