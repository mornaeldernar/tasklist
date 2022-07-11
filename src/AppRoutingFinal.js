import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';

function AppRoutingFinal() {

  //TODO: Change value form sessionStorage
  let loggedIn = true;


  return (
    <Router>
      <Routes>

        <Route exact path="/" element=
          {
            loggedIn ? 
            <Navigate to="/dashboard"/>
            :
            <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={loggedIn ? <DashboardPage/> : <Navigate to="/login" />}/>
        <Route element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
