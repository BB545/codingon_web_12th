import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import PracticeEx from './components/PracticeEx';
import ToDoList from './components/ToDoList';

function App() {
  const handleClick = (name: string, grade: number, score: number) => {
    // 이름, 학년, 점수 출력
    console.log(`안녕 내 이름은 ${name}이고, ${grade}학년, 점수는 ${score}점`);
  }

  return (
    <div className="App">
      <Student name='코딩온' grade={3} part='CS' handleClick={handleClick} />
      {/* <Student /> name 속성이 없기 때문에 에러남 */}
      {/* interface에서 ?로 있어도 되고 없어도 되는 속성으로 정의할 경우 속성 전달 안해줘도 에러 안남 */}
      <Student name='코딩오프' grade={1} handleClick={handleClick} />
      <PracticeEx />
      <ToDoList />
    </div>
  );
}

export default App;
