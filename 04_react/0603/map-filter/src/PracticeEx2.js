import { useState } from "react"

export default function PracticeEx2() {
    const [submit, setSubmit] = useState([])
    const [search, setSearch] = useState([])

    const [nameInput, setNameInput] = useState('');
    const [txtInput, setTxtInput] = useState('');
    const [selectOpt, setSelectOpt] = useState('');
    const [getValue, setGetValue] = useState('');

    const AddInform = () => {
        const newInform = submit.concat({
            name: nameInput,
            txt: txtInput
        })

        setSubmit(newInform)
        setNameInput('');
        setTxtInput('')
    }

    const SearchInform = () => {
        {selectOpt === 'name' ? (setSearch(submit.filter((e) => {
            return e.name.includes(getValue)
        }))): (
            setSearch(submit.filter((e) => {
                return e.txt.includes(getValue)
            }))
        )}
        setGetValue('')
    }

    const AllInform = () => {
        setSearch(submit.filter(() => {
            return submit
        }))
        setGetValue('')
    }

    return (
        <div>
            <div className="submit" style={{padding: 10}}>
                작성자 : <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                제목 : <input type="text" value={txtInput} onChange={(e) => setTxtInput(e.target.value)} />
                <button onClick={AddInform}>등록</button>
            </div>

            <div className="search" style={{padding: 20}}>
                <select onChange={(e) => setSelectOpt(e.target.value)}>
                    <option value="txt">제목</option>
                    <option value="name">작성자</option>
                </select>
                <input type="text" value={getValue} placeholder="검색어" onChange={(e) => setGetValue(e.target.value)} />
                <button onClick={SearchInform}>검색</button>
                <button onClick={AllInform}>전체</button>
            </div>

            <table border="2" width={500} style={{ margin: 'auto' }}>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                {submit.map((value, index) => {
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{value.txt}</td>
                        <td>{value.name}</td>
                    </tr>
                })}
            </table>

            <h3>검색결과</h3>

            {search.length === 0 ? (
                <div>검색결과가 없습니다</div>
            ):(
            <table border="2" width={500} style={{ margin: 'auto' }}>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                {search.map((value, index) => {
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{value.txt}</td>
                        <td>{value.name}</td>
                    </tr>
                })}
            </table>
            )}
        </div>
    )
}
