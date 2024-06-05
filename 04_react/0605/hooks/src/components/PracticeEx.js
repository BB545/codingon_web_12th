import { useState, useMemo } from 'react'

export default function PracticeEx() {
    const [searchInput, setSearchInput] = useState('');
    const [searchItem, setSearchItem] = useState('');

    const calc = useMemo(() => {
        if (searchInput.trim() && searchItem.trim()){
            const input = searchInput.split(' ');
            console.log(input);
            return input.filter((value) => value.includes(searchItem)).length
        }
        return 0;
    }, [searchInput, searchItem])

    return (
        <div>
            <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <br />
            <input type="text" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
            <div>"{searchItem}" 단어의 빈도수 : {calc}</div>
        </div>
    )
}
