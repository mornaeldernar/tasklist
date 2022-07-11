import { BrowserRouter as Router, Route,  Routes, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import TasksPage from './pages/tasks/TasksPage';

function AppTaskLogin() {

  let loggedIn = true;

  return (
    <Router>
      <Routes>

        <Route exact path="/" element=
          {
            loggedIn ? 
            <Navigate to="/tasks"/>
            :
            <Navigate to="/login" />
          }
        />
        <Route path="/login" element={!loggedIn ? <LoginPage/> : <Navigate to="/tasks" />}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/tasks" element={loggedIn ? <TasksPage/> : <Navigate to="/login" />}/>
        <Route element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default AppTaskLogin;
