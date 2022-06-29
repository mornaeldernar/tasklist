
import './App.css';
import TaskListComponent from './components/container/task_list';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import OptionalRender from './components/pure/optionalRender';
import TasksPage from './pages/tasks/TasksPage';

function App() {


  return (
    <div className="App">
      <TasksPage />
    </div>

  );
}

export default App;
