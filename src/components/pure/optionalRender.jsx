import React, { useState } from 'react';

// Login, Logout buttons
const LoginButton = ({loginAction}) => {
    return (
        <button onClick={loginAction} className='btn btn-primary'>Login</button>
    );
}
const LogoutButton = ({logoutAction}) => {
    return (
        <button onClick={logoutAction} className='btn btn-danger'>Logout</button>
    );
}


const OptionalRender = () => {

    const [access, setAccess] = useState(true);
    const [nMessages, setNMessage] = useState(0);

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let loginButton;


    if(access) {
        loginButton = <LogoutButton logoutAction={logoutAction} />
    }else{
        loginButton = <LoginButton loginAction={loginAction} />
    }

    //Unread messages
    const addMessages = () => {
        setNMessage(nMessages+1);
    }

    return (
        <div>
            {/** Optional Button */}
            { loginButton }
            {/** N Messages unread */}
            { access ? (
                <div>
                    { nMessages === 1 && <p>Tienes {nMessages} nuevo mensaje</p> }
                    { nMessages > 1 && <p>Tienes {nMessages} nuevos mensajes</p> }
                    { nMessages === 0 && <p>No tienes mensajes.</p> }
                    <button onClick={addMessages}>Agregar mensajes</button>
                </div>
            ) : null }
        </div>
    );
}

export default OptionalRender;
