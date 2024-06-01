import React, {useState} from 'react'
import apple from './img/apple.png';
import orange from './img/orange.png';
import grape from './img/grape.png';
import peach from './img/peach.png';

export default function Practice() {
    const [Img, setImg] = useState(apple);
    const [style, setStyle] = useState('black');
    const [styleText, setStyleText] = useState('white');
    const [text, setText] = useState('');

    const changeFruitImg = (e) => {
        if (e.target.value === 'apple') {
            setImg(apple)
        } else if (e.target.value === 'orange') {
            setImg(orange)
        } else if (e.target.value === 'grape') {
            setImg(grape)
        } else if (e.target.value === 'peach') {
            setImg(peach)
        }
    }

    const changeStyleBack = (e) => {
        setStyle(e.target.value)
    }

    const changeStyleText = (e) => {
        setStyleText(e.target.value)
    }

    const changeInput = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <label htmlFor="fruit">과일 : </label>
            <select name="fruit" id="fruit" onChange={changeFruitImg}>
                <option value="apple">사과</option>
                <option value="orange">오렌지</option>
                <option value="grape">포도</option>
                <option value="peach">복숭아</option>
            </select>

            <label htmlFor="back">배경색 : </label>
            <select name="back" id="back" onChange={changeStyleBack}>
                <option value="black">검정</option>
                <option value="white">하양</option>
                <option value="red">빨강</option>
                <option value="orange">주황</option>
                <option value="yellow">노랑</option>
                <option value="green">초록</option>
                <option value="blue">파랑</option>
                <option value="purple">보라</option>
                <option value="pink">분홍</option>
            </select>

            <label htmlFor="textcl">글자색 : </label>
            <select name="textcl" id="textcl" onChange={changeStyleText}>
                <option value="black">검정</option>
                <option value="white">하양</option>
                <option value="red">빨강</option>
                <option value="orange">주황</option>
                <option value="yellow">노랑</option>
                <option value="green">초록</option>
                <option value="blue">파랑</option>
                <option value="purple">보라</option>
                <option value="pink">분홍</option>
            </select>

            <label htmlFor="inputText">내용 : </label>
            <input type="text" id="inputText" onChange={changeInput} />

            <img src={Img} alt="과일 사진" />
            <div style={{backgroundColor: style, width: '150px', height: '100px', margin: 'auto'}}><span style={{color: styleText, fontSize: '20px'}}>{text}</span></div>
        </div>
    )
}
