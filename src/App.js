
import './App.css';
import TaskListComponent from './components/container/task_list';
import TodosContainer from './components/container/TodoContainer';
import TodoFormContainer from './components/container/TodoFormContainer';
import AsyncExample from './components/pure/AsyncExample';
import AxiosCrudExample from './components/pure/AxiosCrudExample';
import AxiosExample from './components/pure/AxiosExample';
import FetchExample from './components/pure/FetchExample';
import FilterOptions from './components/pure/FilterOptions';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import ObservableExample from './components/pure/ObservableExample';
import OptionalRender from './components/pure/optionalRender';
import TasksPage from './pages/tasks/TasksPage';

function App() {


  return (
    <div className="App">
      <FilterOptions />
      <TodosContainer />
      <TodoFormContainer></TodoFormContainer>

    </div>

  );
}

export default App;
