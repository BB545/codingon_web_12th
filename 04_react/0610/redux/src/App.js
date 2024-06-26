import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(100);
  const plus = () => setNumber(number + 1);
  const minus = () => setNumber(number - 1);
  return (
    <div className="App">
      <h1>React Redux 사용 전</h1>
      <Box1 number={number} plus={plus} minus={minus} />
    </div>
  );
}

// 하나의 컴포넌트라고 보면됨 - 원래는 다른 파일에 있어야하지만...
// state가 props를 타고 계속 내려와서 마지막 자식 컴포넌트에서 숫자를 업데이트 하고 있음 -> 코드 매우 복잡해짐 -> redux 사용해서 간결하게하기
const Box1 = ({number, plus, minus}) => {
  return (
    <div>
      <h2>Box1: {number}</h2>
      <Box2 number={number} plus={plus} minus={minus} />
    </div>
  )
}

const Box2 = ({number, plus, minus}) => {
  return (
    <div>
      <h2>Box2: {number}</h2>
      <Box3 number={number} plus={plus} minus={minus} />
    </div>
  )
}

const Box3 = ({number, plus, minus}) => {
  return (
    <div>
      <h2>Box3: {number}</h2>
      <Box4 number={number} plus={plus} minus={minus} />
    </div>
  )
}

const Box4 = ({number, plus, minus}) => {
  return (
    <div>
      <h2>Box4: {number}</h2>
      <button onClick={plus}>PLUS</button>
      <button onClick={minus}>MINUS</button>
    </div>
  )
}

export default App;
