import CssModuleComponent from './CssModuleComponent';
import PracticeEx from './PracticeEx';
import PracticeEx2 from './PracticeEx2';
import PracticeEx3 from './PracticeEx3';
import SassComponent from './SassComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponent />

      <h2>Sass Component</h2>
      <SassComponent />

      <h2>PracticeEx</h2>
      <PracticeEx />

      <h2>PracticeEx2</h2>
      <PracticeEx2 />

      <h2>PracticeEx3</h2>
      <PracticeEx3 />
    </div>
  );
}

export default App;
