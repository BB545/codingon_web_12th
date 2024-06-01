import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SyntheticEvent from './SyntheticEvent';
import HandlerEx from './components/ex/HandlerEx';
import HandlerEx2 from './components/ex/HandlerEx2';
import HandlerEx3 from './components/ex/HandlerEx3';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />
      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <HandlerEx />
      <hr />
      <HandlerEx2 />
      <hr />
      <HandlerEx3 />
    </div>
  );
}

export default App;
