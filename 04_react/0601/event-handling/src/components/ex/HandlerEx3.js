import { useState } from "react"

export default function HandlerEx3() {
    const [BtnMsg, setBtnMsg] = useState('사라져라');
    const [msg, setMsg] = useState('안녕하세요');

    function BtnSet(text) {
        setBtnMsg(text)
        setMsg('');
        if (BtnMsg == '보여라') {
            setBtnMsg('사라져라');
            setMsg('안녕하세요');
        }
    }

  return (
    <div>
        <button onClick={() => BtnSet('보여라')}>{BtnMsg}</button>
        <h1>{msg}</h1>
    </div>
  )
}
