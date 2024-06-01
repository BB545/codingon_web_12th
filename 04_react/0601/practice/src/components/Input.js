import { useState } from 'react'
import Result from './Result';
import Select from './Select';

export default function Input() {
    const [text, setText] = useState('');

    const changeInput = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <div>
                <Select text={text} />
            </div>
            <label htmlFor="inputText">내용 : </label>
            <input type="text" id="inputText" onChange={changeInput} />
        </div>
    )
}
