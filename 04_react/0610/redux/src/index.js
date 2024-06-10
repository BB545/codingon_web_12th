import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// store는 하나이므로 모든 컴포넌트에서 접근이 가능해야하기 때문에 index.js에 정의해준다.
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';
import App2 from './App2';
import App3 from './App3';

import { composeWithDevTools } from '@redux-devtools/extension';
import PracticeEx from './PracticeEx';

const root = ReactDOM.createRoot(document.getElementById('root'));

// store 정의: 전역 상태를 관리하는 공간 (하나의 프로젝트에 하나만 만들어야함)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
root.render(
  <React.StrictMode>
    {/* 전체 프로젝트에서 하나의 스토어 사용 가능해짐 */}
    <Provider store={store}>
      <App />
      <App2 />
      <App3 />
      <PracticeEx />
    </Provider>
  </React.StrictMode>
);
