import logo from './logo512.png'

export default function PropsPractice2({ title, author, price, type }) {
    return (
        <div>
            <div className="bookCont">
                <h3 className="best">이번주 베스트셀러</h3>
                <img src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158511906.jpg" className="bookImg" />
                <div className="bookTitle">{title}</div>
                <div className="bookContent">저자: {author}</div>
                <div className="bookContent">판매가: {price}</div>
                <div className="bookContent">구분: {type}</div>
            </div>
            <img src={logo} style={{ width: 80 }} />
            <hr />
            {/* public에 있는 이미지 사용하기 */}
            <img src="/logo192.png" style={{ width: 80 }} />
        </div>
    )
}