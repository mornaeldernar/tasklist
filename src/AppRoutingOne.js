import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailsPage from './pages/tasks/TaskDetailsPage';
import { useState, useEffect } from 'react'; 
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('credentials'));
  });

  const handleLogin = async () => {
    const token = await fakeAuth();
    localStorage.setItem('credentials',token)
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("credentials")
    setToken(null);
  };

  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    }
  );

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| Inicio |</Link>
          <Link to="/Home">| Home |</Link>
          <Link to="/about">| About |</Link>
          <Link to="/Tasks">| Tareas |</Link>
          { token ? <Link to="/login"> Login ||</Link>:  (<button type="link" onClick={handleLogout}>Logout</button>) }
        </aside>
        <main>
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/online-state' element={<StatePage/>} />
            <Route path='/login' element={<LoginPage/>}>
            </Route>
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/tasks' element={
                <TasksPage/> 
              }>
            </Route>
            <Route exact path='/tasks/:id' element={<TaskDetailsPage/>} />
            {/** 404 - Page Not Found */}
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
