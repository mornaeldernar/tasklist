import React, { useState } from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {

        console.log('Suscripcion a obserbable');
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New number: ',newNumber);
                    setNumber(newNumber)
                },
                error(error){
                    alert(`Algo esta mal ${error}`)
                    console.log('Error in the observable')
                },
                complete() {
                    alert(`Se termino con ${number}`)
                    console.log('Done with the observable')
                }
            }
        )
    }

    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick={obtainNewNumbers}>Iniciar Observable</button>
        </div>
    );
}

export default ObservableExample;
