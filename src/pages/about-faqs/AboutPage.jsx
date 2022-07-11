import React from 'react';
//Para la navegacion
import { useLocation, useNavigate } from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation();
    const navigation = useNavigate();

    const navigate = (path) => {
        navigation(path);
    }

    const goBack = () => {
        navigation(-1);
    }
    const goForward = () => {
        navigation(1);
    }

    return (
        <div>
            <h1>About</h1>
            <div>
                <button onClick={() => navigate('/Home')}>Go to Home</button>
                <button onClick={goBack}>Go Back</button>
                <button onClick={goForward}>Go Forward</button>
            </div>
        </div>
    );
}

export default AboutPage;
