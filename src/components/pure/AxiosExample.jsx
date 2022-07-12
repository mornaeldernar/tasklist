import React, { useEffect, useState } from 'react';
import { getRandomUser } from '../../services/axiosService';

const AxiosExample = () => {
    
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        obtenerUsuario()
    }, []);

    const obtenerUsuario = () => {
        getRandomUser()
            .then((response) => {
                console.log("RESPUESTA", response);
                if(response.status === 200){
                    setUsuario(response.data.results[0]);
                }
            })
            .catch((error) => {
                console.log(`algo salio mal ${error}`);
            })
    }

    return (
        <div>
            <h1>Axios example</h1>
            {
                usuario != null ?
                (<div>
                    <img src={usuario.picture.large} />
                    <h2>{usuario.name.title} {usuario.name.first} {usuario.name.last}</h2>
                    <h3>{usuario.email}</h3>
                </div>) :
                (<div>No hay datos</div>)
            }
            <div>
                <p>Crea un nuevo usuairo</p>
                <button onClick={obtenerUsuario}>Nuevo</button>
            </div>
        </div>
    );
}

export default AxiosExample;
