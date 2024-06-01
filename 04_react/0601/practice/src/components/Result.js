import {Img, style, styleText} from './Select';
import {text} from './Input';
import {useState} from 'react'

export default function Result({ Img, style, styleText, text }) {
    return (
        <div>
            <img src={Img} alt="과일 사진" />
            <div style={{ backgroundColor: style, width: '150px', height: '100px', margin: 'auto' }}><span style={{ color: styleText, fontSize: '20px' }}>{text}</span></div>
        </div>
    )
}
