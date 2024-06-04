import { useState } from "react"

export default function PracticeEx2Sol() {
    const [inputWriter, setInputWriter] = useState('')
    const [inputTitle, setInputTitle] = useState('')
    // 검색어 가져오기
    const [inputSearch, setInputSearch] = useState('')
    const [comment, setComment] = useState([
        {
            writer: '민수',
            title: '안뇽',
        },
        {
            writer: '지민',
            title: '하이하이',
        },
        {
            writer: '희수',
            title: '멋쟁이',
        },
    ])

    const addComment = () => {
        let newComment = {
            writer: inputWriter,
            title: inputTitle,
        }

        setComment([...comment, newComment])
        setInputWriter('')
        setInputTitle('')
    }

    // 검색어 타입 가져오기
    const [searchType, setSearchType] = useState('writer');
    // 검색 결과 보여주기
    const [result, setResult] = useState([]);

    // 검색어 타입 가져오는 함수
    const selectSearchType = (e) => {
        setSearchType(e.target.value);
    }

    // 검색 결과 내는 함수, 검색하는 함수
    const searchComment = () => {
        // filter로 검색 - 작성자로 검색? 제목으로 검색? - item[searchType]
        const searchResult = comment.filter((item) => {
            // 객체 형태이므로 key값으로 값에 접근한 것 - includes(inputSearch) 검색어가 포함되어 있는지 검사
            // 검색 결과 없다면 null
            if (!item[searchType].includes(inputSearch)) return null

            // 검색 결과 있다면 - 검색 결과에 해당하는 값이 searchResult 배열에 담겨질 것임
            return item;
        });
        setResult(searchResult);
        setInputSearch('');
    }

    return (
        <div>
            <form>
                <label htmlFor="wirter2">작성자:</label>
                <input
                    id="wirter2"
                    type="text"
                    name="writer"
                    value={inputWriter}
                    onChange={(e) => setInputWriter(e.target.value)}
                />
                <label htmlFor="title2">제목:</label>
                <input
                    id="title2"
                    type="text"
                    name="title"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                />
                <button type="button" onClick={addComment}>
                    작성
                </button>
            </form>

            <form>
                <select name="type" onChange={selectSearchType}>
                    <option value="writer">작성자</option>
                    <option value="title">제목</option>
                </select>

                <input
                    type="text"
                    name="search"
                    placeholder="검색어"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                />
                <button type="button" onClick={searchComment}>
                    검색
                </button>
            </form>

            <h3>전체 댓글 목록</h3>
            <table border={1} style={{ marginTop: '30px', width: '500px' }}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {comment.map((value, idx) => {
                        return (
                            <tr key={idx + 1}>
                                <td>{idx + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <h3>댓글 검색 결과</h3>
            {result.length > 0 ? (
                <div>
                    <table border={1} style={{ marginTop: '30px', width: '500px' }}>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((value, idx) => {
                                return (
                                    <tr key={idx + 1}>
                                        <td>{idx + 1}</td>
                                        <td>{value.title}</td>
                                        <td>{value.writer}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h5>검색 결과가 없습니다.</h5>
            )}
        </div>
    )
}
