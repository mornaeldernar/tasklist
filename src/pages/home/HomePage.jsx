import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = () => {
    const location = useLocation();
    const navigation = useNavigate();

    console.log('We are in Route:', location.pathname);

    const navigate = (path) => {
        navigation(path);
    }

    const navigateProps = (path) => {
        navigation(path,{
            state: {
                online: 0
            }
        });
    }
    const goBack = () => {
        navigation(-1);
    }
    const goForward = () => {
        navigation(1);
    }
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={() => navigate('/about')}>Go to Home</button>
                <button onClick={() => navigateProps('/online-state')}>online</button>
                <button onClick={goBack}>Go Back</button>
                <button onClick={goForward}>Go Forward</button>
            </div>
        </div>
    );
}

export default HomePage;
