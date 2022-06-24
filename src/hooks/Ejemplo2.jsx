/**
 * Ejemplo de uso de 
 * - useState()
 * - useRef()
 * - useEffect()
 * 
 */
import React, { useState,useRef, useEffect } from 'react'

function Ejemplo2(props) {
  
    /**
     * vamos a crear dos contadores distintos
     * cado uno con un estaado diferente
     */

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    /**
     * vamos a crear una referencia con useRef() para asociar una variable
     * con un elemento del DOM del componente(vista HTML)
     */
    const miRef = useRef();

    function incrementar1(){
        setContador1( contador1 + 1 );
    }

    function incrementar2(){
        setContador2( contador2 + 1 )
    }

    /**
     * Trabajamos con UseEffect
     */
    /**
     * ? Caso 1: ejecutar un snipet de codigo
     * Cada vez que haya un cambio en el estado del componente 
     * se ejecuta aquello que esta dentro del useEffect()
     */
    //useEffect(() => {
    //    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //    console.log('Mostrando Referencia a elemento del DOM:');
    //    console.log(miRef);
    //});
    /**
     * ? Caso 2: ejecutar solo cuando cambie contador1
     * Cada vez que cambie el contador1, se ejecuta lo que diga el useEffect()
     * en caso de que cambie el contador2 , no habrá ejecucion()
     */
    // useEffect(() => {
    //    console.log('CAMBIO EN EL ESTADO DEL CONTADOR1');
    //    console.log('Mostrando Referencia a elemento del DOM:');
    //    console.log(miRef);  
    //}, [contador1]);
     /**
    * ? Caso 3: ejecutar solo cuando cambie contador1 o contador2
    * Cada vez que cambie el contador1, se ejecuta lo que diga el useEffect()
    * Cada vez que cambie el contador1, se ejecuta lo que diga el useEffect()
    */
   useEffect(() => {
       console.log('CAMBIO EN EL ESTADO DEL CONTADOR1 o CONTADOR2');
       console.log('Mostrando Referencia a elemento del DOM:');
       console.log(miRef);
       
   }, [contador1,contador2]);

    return (
    
        <div>
            <h1>**Ejemplo de useState(), useRef() y useEffect()**</h1>
            <h2>CONTADOR 1: { contador1 }</h2>
            <h2>CONTADOR 2: { contador2 }</h2>
            {/* Elemento Referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    )
}


export default Ejemplo2
