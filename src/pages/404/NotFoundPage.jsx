import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigation = useNavigate();
    const goBack = () => {
        navigation(-1);
    }
    return (
        <div>
            <h1>404 - Page Not Found</h1>
                <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default NotFoundPage;
