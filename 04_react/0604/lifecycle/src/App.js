import './App.css';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import PostList from './PostList';
import PracticeEx from './PracticeEx';
import PracticeEx2 from './PracticeEx2';

function App() {
  return (
    <div className="App">
      <LifeCycleClass />
      <hr />
      <LifeCycleFunc />
      <hr />
      <PracticeEx />
      <hr />
      <PracticeEx2 />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
