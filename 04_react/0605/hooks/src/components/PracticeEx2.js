import { useCallback, useState } from "react"

export default function PracticeEx2() {
    const [list, setList] = useState([
        'item1',
        'item2',
        'item3'
    ]);
    const [edit, setEdit] = useState(null);
    const [editText, setEditText] = useState('');

    const SaveBtn = useCallback((saveList) => {
        setList(list.map((value) => (value === edit ? saveList : value)));
        setEdit(null);
    }, [list, edit])

    const EditBtn = useCallback((value) => {
        setEdit(value);
        setEditText(value);
    }, [])

    const DelBtn = useCallback((delList) => {
        setList(list.filter((value) => value !== delList))
    }, [list])

    return (
        <div>
            <ul>
                {list.map((value) => (
                    <li key={value}>
                        {edit === value ? (
                            <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                        ) : (
                            value
                        )}
                        {edit === value ? (
                            <button onClick={() => SaveBtn(editText)}>Save</button>
                        ) : (
                            <>
                                <button onClick={() => EditBtn(value)}>Edit</button>
                                <button onClick={() => DelBtn(value)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}
