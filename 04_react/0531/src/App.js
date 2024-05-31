import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import PropsPractice from './PropsPractice';
import PropsPractice2 from './PropsPractice2';
import PropsPractice3 from './PropsPractice3';

function App() {
  const my_F = () => {
    console.log('콘솔 띄우기 성공');
  }
  return (
    <div className="App">
      <PropsPractice name = '노현희' food = '김치찌개' />
      <PropsPractice name = '노현희' />

      <hr />
      <PropsPractice2 title = '나의 하루는 4시 40분에 시작된다' author = '김유진' price = '13,500원' type = '자기개발서' />

      <hr />
      <PropsPractice3 text = '안녕하세요' valid = {() => console.log('콘솔 띄우기 성공!')} />
      <PropsPractice3 valid = {my_F} />

      <hr />
      <FunctionComponent name = "코딩온" />
      <FunctionComponent />

      <FunctionComponent>children</FunctionComponent>
      <FunctionComponent name = {1} />

      <hr />
      <ClassComponent name = "클래스 코딩온" />
      <ClassComponent />
      <ClassComponent>class children</ClassComponent>
    </div>
  );
}

export default App;
