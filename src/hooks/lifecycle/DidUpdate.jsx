/**
 * Ejemplo de uso de método ComponentDidUpdate de clase y uso de Hook en componente funcional
 */
import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}


export const DidUpdateHook = () => {
    {/** use effect sin corchetes */}
    useEffect(() => {
        console.log('comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    });

    return (
        <div>
            
        </div>
    );
}

