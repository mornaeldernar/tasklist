/**
 * Ejemplo Hooks de uso de 
 * - useState()
 * - useContext()
 * 
 */
import React, { useState, useContext } from 'react'



/**
 * iniciamos un estado vacio que va a rellenarse con los
 * datos del contexto del padre
 */
const miContexto = React.createContext(null);

/**
 * Componente1 dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 * @returns Componente1
 */
function Componente1() {
    const state = useContext(miContexto);

  return (
    <div>
        <h1>
            El token es: { state.token }
        </h1>
        <Componente2></Componente2>
    </div>
  )
}

const Componente2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La session es: { state.sesion }
            </h2>
        </div>
    );
}


const MiComponenteConContexto = () => {
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //creamos el estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData({
            token: 'JWT123456789',
            sesion: sessionData.sesion + 1
        })
    }

    return (
        <miContexto.Provider value={ sessionData }>
            <h1>*** Ejemplo de useState() y useContext() ***</h1>
            {/** Todo lo que esta aqui adentro puede leer los dtos de session data ademas 
            de actualizarse .
            Ademas, si se actualiza, los componentes de aquí, tambien lo actualizan. */}
            <Componente1></Componente1>
            <button onClick={ actualizarSesion }>Actualizar Session</button>
        </miContexto.Provider>
    );
}

export default MiComponenteConContexto;

