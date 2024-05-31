import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import StatePractice from './StatePractice';
import UseStatePractice from './UseStatePractice';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />

      <SayFunction />
      <hr />

      <StatePractice />
      <UseStatePractice />
    </div>
  );
}

export default App;
