import React, { useState, useEffect } from 'react';

const ComponenteEstado = () => {
    const [partida, setPartida] = useState(0);

    useEffect(() => {
        saludar()
    }, [partida]);

    const saludar = () => {
        console.log('Actualizacion de puntos')
    }
    const cambiaPuntos = () => {
        setPartida (partida+1);
    }

    return (
        <div>
            <h1>Puntuación: { partida }</h1>
            <button onClick={cambiaPuntos}>Cambiar</button>
        </div>
    );
}

export default ComponenteEstado;
