
import './App.css';
import TaskListComponent from './components/container/task_list';
import AsyncExample from './components/pure/AsyncExample';
import AxiosExample from './components/pure/AxiosExample';
import FetchExample from './components/pure/FetchExample';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import ObservableExample from './components/pure/ObservableExample';
import OptionalRender from './components/pure/optionalRender';
import TasksPage from './pages/tasks/TasksPage';

function App() {


  return (
    <div className="App">
      <AxiosExample />

    </div>

  );
}

export default App;
