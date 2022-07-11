import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({onLoad}) => {
    const navigation = useNavigate();
   
    useEffect(() => {
        onLoad();
        navigation("/");
    });


    return (
        <div>
            <h1>Cerrando Sesion...</h1>
        </div>
    );
}

export default Logout;
