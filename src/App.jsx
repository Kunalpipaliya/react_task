import logo from './logo.svg';
import './App.css';
import FilterCategory from './task/Filtering/FilterCategory';
import Filteringjobs from './task/Filtering/Filteringjobs';

function App() {
  return (
    <div className="App container">
      <FilterCategory/>
      <Filteringjobs/>
    </div>
  );
}

export default App;
