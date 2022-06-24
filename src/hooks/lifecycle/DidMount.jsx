/**
 * Ejemplo de uso del método 
 * de cliclo de vida de componente clase 
 */
import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {

    {/** use effect con corchetes vacios para que se ejecute una vez */}
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}
