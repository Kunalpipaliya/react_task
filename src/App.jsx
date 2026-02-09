import logo from './logo.svg';
import './App.css';
import FilterCategory from './task/Filtering/FilterCategory';
import Filteringjobs from './task/Filtering/Filteringjobs';
import FormData from './task/Form handling/FormData';
import Todo from './task/Todo/Todo';

function App() {
  return (
    <div className="App container">
      <h3>Filtering Tasks</h3>
      <FilterCategory/>
      <Filteringjobs/>

      <FormData/>
      <Todo/>
    </div>
  );
}

export default App;
