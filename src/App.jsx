import logo from './logo.svg';
import './App.css';
import FilterCategory from './task/Filtering/FilterCategory';
import Filteringjobs from './task/Filtering/Filteringjobs';
import FormData from './task/Form handling/FormData';
// import Todo from './task/Todo/Todo';
import PostHandling from './task/CRUD/PostHandling';
import UseFormik from './task/UseFormik/UseFormik';
import FormHandling from './task/UseFormik/FormHandling';
import APIcalling from './task/API/Get method/APIcalling';
import Todo from './task/API/Get method/Todo';
import Studentlist from './task/API/Get method/Studentlist';
import Userlist from './task/API/Get method/Userlist';
import RickandMorty from './task/API/Get method/RickandMorty';
import Students from './task/API/post method/Students';
import Usersdatacrud from './task/API/Delete method/Usersdatacrud';
import UseRefExample from './task/Hooks/UseRefExample';
import UseMemoExample from './task/Hooks/UseMemoExample';
import UseCallbackExample from './task/Hooks/UseCallbackExample';
import UseContextExample from './task/Hooks/UseContextExample';

function App() {
  return (
    <div className="App ">
    
      {/* <FilterCategory/>
      <Filteringjobs/>

      <FormData/>
      <Todo/>
      <PostHandling/>
      <UseFormik/>*/}
      {/* <FormHandling/>  */}


      {/* API */}
      {/* <APIcalling/> */}
      {/* <Todo/> */}
      {/* <Userlist/> */}
      {/* <RickandMorty/> */}


      {/* <Studentlist/>
      <Students/> */}

      {/* <Usersdatacrud/> */}
      {/* <UseRefExample/> */}
      {/* <UseMemoExample/> */}
      {/* <UseCallbackExample/> */}
      <UseContextExample/>
    </div>
  );
}

export default App;
