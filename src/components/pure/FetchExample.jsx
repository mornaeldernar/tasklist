import React, { useState, useEffect } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetail, login } from '../../services/fetchService';

const FetchExample = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [UsuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [totalUsuarios, setTotalUsuarios] = useState(12);
    const [paginas, setPaginas] = useState(2);
    const [usuariosPorPagina, setUsuariosPorPagina] = useState(6);

    useEffect(() => {
        obtenerUsuarios()
    }, []);


    const obtenerUsuarios = () => {
        getAllUsers()
            .then((response) => {
                console.log('All users: ', response.data);
                setUsuarios(response.data);
                setPaginas(response.total_pages);
                setUsuariosPorPagina(response.per_page);
                setTotalUsuarios(response.total);
            })
            .catch((error) => {
                alert(`Hubo un error obteniendo los usuarios: ${error}`);
            })
            .finally(() => {
                console.log('Termino cargando usuarios:')
                console.table(usuarios);
            })
    }

    const obtenerUsuariosPaginados = (pagina) => {
        getAllPagedUsers(pagina)
            .then((response) => {
                setUsuarios(response.data);
            })
            .catch((error) => {
                alert(`Hubo un error obteniendo los usuarios: ${error}`);
            })
            .finally(() => {
                console.log('Termino cargando usuarios:')
                console.table(usuarios);
            })
    }

    const obtenerDetalleUsuario = (id) => {
        getUserDetail(id)
            .then((response) => {
                setUsuarioSeleccionado(response.data);
            })
            .catch((error) => {
                alert(`Hubo un error obteniendo el usuario: ${error}`);
            })
            .finally(() => {
                console.log('Termino cargando usuarios:')
                console.table(UsuarioSeleccionado);
            })
    }

    const authUser = () => {
        login("eve.holt@reqres.in","cityslicka")
            .then((response) => {
                console.log('TOKEN',response.token);
                sessionStorage.setItem('token',response.token);
            })
            .catch((error) => {
                alert(`Hubo un error login usuario: ${error}`);
            })
            .finally(() => {
                console.log('Termino login usuarios:');
            })
    }
    return (
        <div>
            <button onClick={authUser}>
                Login
            </button>

            <h2>Usuarios</h2>
            {
                usuarios.map((usuario, index) => 
                    (
                        <p key={index} onClick={() => obtenerDetalleUsuario(usuario.id)}> {usuario.first_name} {usuario.last_name}</p>
                    )
                )
            }
            <p>Mostrando {usuariosPorPagina} de {totalUsuarios}</p>
            <button onClick={() => obtenerUsuariosPaginados(1)}>
                1
            </button>
            <button onClick={() => obtenerUsuariosPaginados(2)}>
                2
            </button>
            
            <div>
                <h3>Usuario Seleccionado</h3>
                {
                    UsuarioSeleccionado && (
                        <div>
                            <p>Name : {UsuarioSeleccionado.first_name}</p>
                            <p>Last Name: {UsuarioSeleccionado.last_name}</p>
                            <p>Email : {UsuarioSeleccionado.last_name}</p>
                            <img alt='Avatar' src={UsuarioSeleccionado.avatar} style={{height: '50px', width: '50px'}} />
                        </div>
                    ) 
                    
                }

            </div>
        </div>
    );
}

export default FetchExample;
