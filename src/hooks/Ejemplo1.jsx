/**
 * Ejemplo del uso del HOOK  useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado privado através de un Hook
 * y, ademas, poder modificarlo.
 */

import React, { useState } from 'react'

function Ejemplo1(props) {
    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre : "Rafael",
        email : "jimenez.rafa@gmail.com"
    }

    /**
     * Queremos que el VALORINICIAL Y PERSONAINICIAL sean parte del estado del componente
     *  para así poder gestionar su cambio
     *  y que este se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(initialState)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        //funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     * 
     */
    function actualizarPersona(){
        setPersona({
            nombre: 'Pepe',
            email: 'pepe@pepe.com'
        })
    }



  return (
    <div>
        <h1>**Ejemplo de useState**</h1>
        <h2>El contador es: { contador }</h2>
        <h2>La persona es: </h2>
        <h3>Nombre: { persona.nombre }</h3>
        <h3>Email: { persona.email }</h3>
        <div>
            <button onClick={ incrementarContador }>Incrementar Contador</button>
            <button onClick={ actualizarPersona }>Cambiar Persona</button>
        </div>
    </div>
  )
}


export default Ejemplo1
