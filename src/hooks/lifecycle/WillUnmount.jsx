/**
 * Ejemplo de uso de método componentWillUnmount de clase y uso de Hook en componente funcional
 */
 import React, { Component, useEffect } from 'react';

 export class WillUnmount extends Component {
 
    componentWillUnmount(){
        console.log('comportamiento antes de que el componente desaparezca')
    }
 
     render() {
         return (
             <div>
                 <h1>WillUnmount</h1>
             </div>
         );
     }
 }
 
 
 export const WillUnmountHook = () => {
    
     {/** use effect con corchetes y en el return */}
     useEffect(() => {
        return () => {
            console.log('comportamiento antes de que el componente desaparezca')
        }
     },[]);
 
     return (
         <div>
            <h1>WillUnmount</h1> 
         </div>
     );
 }