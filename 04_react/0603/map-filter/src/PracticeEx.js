import { useState } from "react"

export default function PracticeEx() {
    const [submit, setSubmit] = useState([
        {
            id: 1,
            name: '코디',
            email: 'codi@gamil.com'
        },
        {
            id: 2,
            name: '윤소희',
            email: 'yoonsohee@gamil.com'
        },
    ])

    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const AddInform = () => {
        const newInform = submit.concat({
            id: submit + 1,
            name: nameInput,
            email: emailInput
        })

        setSubmit(newInform)
        setNameInput('');
        setEmailInput('')
    }

    const deleteInform = (tartgetIdx) => {
        const newInform = submit.filter((element) => {
            return element.id !== tartgetIdx
        })
        setSubmit(newInform)
    }

  return (
    <div>
        <input type="text" placeholder="이름" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
        <input type="email" placeholder="이메일" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
        <button onClick={AddInform}>등록</button>

        {submit.map((value) => {
            return <h2 key={value.id} onDoubleClick={() => deleteInform(value.id)}>{value.name} : {value.email}</h2>
        })}
    </div>
  )
}
