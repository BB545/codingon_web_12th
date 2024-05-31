export default function PropsPractice({name, food = '한식'}) {
    return (
        <div>
            <h1>Hi {name}</h1>
            <h1>좋아하는 음식은 <span style={{color: 'red'}}>{food}</span></h1>
        </div>
    )
}