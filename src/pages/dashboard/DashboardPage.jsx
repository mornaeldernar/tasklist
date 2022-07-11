import React from 'react';
import Button from '@mui/material/Button';
import Footer from '../../components/pure/footer';
import LoginPage from '../auth/LoginPage';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    
    const navigation = useNavigate();

    const logout = () => {
        navigation("/login")
    }

    return (
        <div>
        <Button variant='contained' onClick={logout}>
            Logout
        </Button>
        <Footer />
        </div>
    );
}

export default DashboardPage;
