import './App.css';
import Faq from './components/Faq';
import PracticeEx from './components/PracticeEx';
import PracticeEx2 from './components/PracticeEx2';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={3} />
      <hr />
      <PracticeEx />
      <hr />
      <PracticeEx2 />
      <hr />
      <UseReducerEx />
      <hr />
      <Faq />
    </div>
  );
}

export default App;
