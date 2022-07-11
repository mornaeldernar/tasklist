import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <LoginFormik />
            <Link to="/register">Registrate</Link>
        </div>
    );
}

export default LoginPage;
