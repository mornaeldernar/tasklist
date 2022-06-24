import React, { useState }  from 'react';


// ? Estilo para usuario logeado
const loggedStyle = {
    color: 'blue'
};

// ? Estilo para usuario no logeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
};


const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);


    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            {logged ? (<p>Hola, { props.name }</p>) : (<p>Inicia sessión</p>) }
            <button onClick={()=>{setLogged(!logged)}}>{ logged ? 'Logout' : 'Login' }</button>
        </div>
    );
}

export default GreetingStyled;
