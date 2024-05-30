import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import FunctionProps from './FunctionProps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    <ClassComponent />
    <FunctionComponent />

    {/* 여러번 쓰지 않고 map으로 반복해서 결과값 리턴하는 것 가능해짐, 고유값 key를 지정해줘야함 */}
    {[1,2,3].map((e) => <FunctionProps key={`abc_${e}`} name={`${e}번 컴포넌트`} />)}
    {/* <FunctionProps name='1번 컴포넌트' lunch='낙지덮밥' />
    <FunctionProps name='2번 컴포넌트' />
    <FunctionProps name='3번 컴포넌트' /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
