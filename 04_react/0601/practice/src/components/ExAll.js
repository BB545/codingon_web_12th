import React, { useState } from 'react'
import SelectSol from './SelectSol';
import InputSol from './InputSol';
import ResultSol from './ResultSol';

export default function ExAll() {
    const [data, setData] = useState({
        fruit: "apple",
        background: 'black',
        color: 'white',
        content: 'text'
    });
    return (
        <div>
            <div>
                <SelectSol setData={setData} />
            </div>
            <div>
                <InputSol setData={setData} />
            </div>
            <div>
                <ResultSol data={data} />
            </div>
        </div>
    );
}
