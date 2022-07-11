import React from 'react';
import { Link } from 'react-router-dom';
import RegisterFormik from '../../components/pure/forms/registerFormik';

const RegisterPage = () => {
    return (
        <div>
            <RegisterFormik />
            <Link to="/login">Login</Link>
        </div>
    );
}

export default RegisterPage;
