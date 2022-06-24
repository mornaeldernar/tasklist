import React, { useState } from 'react';
import Hijo from '../pure/hijo';

const Padre = () => {

    const [name, setName] = useState("");
    function showMessage(texto){
        alert(`Mensaje recibdo: ${texto}`)
    }

    function updateName (nombre) {
        setName(nombre);
    }

    return (
        <div style={{background: 'tomato', padding:'30px'}}>
            <span>{name}</span>
            <Hijo name={name} send={showMessage} update={updateName} />
        </div>
    );
}

export default Padre;
