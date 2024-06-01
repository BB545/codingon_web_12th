import './App.css';
import {useState} from 'react'
import Input from './components/Input';
import Result from './components/Result';
import Select from './components/Select';
import ExAll from './components/ExAll';

function App() {
  return (
    <div className="App">
      <Select />
      <Input />
      <Result />

      <hr />
      <ExAll />
    </div>
  );
}

export default App;
