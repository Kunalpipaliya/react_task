import logo from './logo.svg';
import './App.css';
import FilterCategory from './task/Filtering/FilterCategory';
import Filteringjobs from './task/Filtering/Filteringjobs';
import FormData from './task/Form handling/FormData';
import Todo from './task/Todo/Todo';
import PostHandling from './task/CRUD/PostHandling';
import UseFormik from './task/UseFormik/UseFormik';
import FormHandling from './task/UseFormik/FormHandling';

function App() {
  return (
    <div className="App container">
      <h3>Filtering Tasks</h3>
      <FilterCategory/>
      <Filteringjobs/>

      <FormData/>
      <Todo/>
      <PostHandling/>
      <UseFormik/>
      <FormHandling/>
    </div>
  );
}

export default App;
