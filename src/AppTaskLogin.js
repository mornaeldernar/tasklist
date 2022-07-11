
import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Route,  Routes, Navigate } from 'react-router-dom';
import Logout from './components/pure/logout';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import TasksPage from './pages/tasks/TasksPage';

function AppTaskLogin() {
    
    useEffect(() => {
        const credenciales = localStorage.getItem('credentials');
        if(credenciales) {
            setLoggedIn(true);
        }
        else{
            setLoggedIn(false);
        }
    });

    const [loggedIn, setLoggedIn] = useState(false);

    
    const onLogin = (values) => {
        localStorage.setItem('credentials',values);
        setLoggedIn(true);
    }
    const onLogout = () => {
        setLoggedIn(false);
        localStorage.clear();
    }


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
        <Route path="/login" element={!loggedIn ? <LoginPage onSubmit={(e) => onLogin(e)}/> : <Navigate to="/tasks" />}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/tasks" element={loggedIn ? <TasksPage/> : <Navigate to="/login" />}/>
        <Route path="/logout" element={<Logout onLoad={onLogout}/>} />
        <Route element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default AppTaskLogin;
