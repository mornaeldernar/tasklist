import React, { useState } from 'react';
import { login, getAllUsers, getAllPagedUsers, getUserById, createUser, updateUser, deleteUser } from '../../services/axiosCrudService';
import { Formik, Field, Form, ErrorMessage } from 'formik';import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('No es un email válido').required('El email es obligatorio'),
        password: Yup.string().required('La contraseña es requerida')
    }
);

const AxiosCrudExample = () => {

    /**
     * Como se inicializan los valores del form
     */
     const initialCredentials = {
        email:'',
        password:''
    }


    const [token, setToken] = useState(null);
    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if(response.data.token){
                    setToken(JSON.stringify(response.data.token).toString());
                    sessionStorage.setItem("token",response.data.token);
                } else {
                    sessionStorage.removeItem("token");
                    throw new Error("Login Failure");
                }
            })
            .catch((error)=> {
                sessionStorage.removeItem("token");
                alert(`Hay un error ${error}`)
            })
            .finally(() => console.log('Login done'))
    }

    // CRUD Examples
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if(response.data.data && response.status === 200){
                    console.log(JSON.stringify(response.data.data));
                }else {
                    throw new Error("No hay usuarios")
                }
            })
            .catch((error) => {
                console.log(`Hay un error ${error}`)
            })
    }
    
    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if(response.data.data && response.status === 200){
                    console.log(JSON.stringify(response.data.data));
                }else {
                    throw new Error(`No hay usuarios en la pagina ${page}`)
                }
            })
            .catch((error) => {
                console.log(`Hay un error ${error}`)
            })
    }
    // CRUD Examples
    const obtainUserById = (id) => {
        getUserById(id)
            .then((response) => {
                if(response.data.data && response.status === 200){
                    console.log(JSON.stringify(response.data.data));
                }else {
                    throw new Error("Usuario no existe")
                }
            })
            .catch((error) => {
                console.log(`Hay un error ${error}`)
            })
    }
    const createNewUser = (name,job) => {
        createUser(name,job)
            .then((response) => {
                if(response.data && response.status === 201){
                    console.log(JSON.stringify(response.data));
                }else {
                    throw new Error("Usuario no creado")
                }
            })
            .catch((error) => {
                console.log(`Hay un error ${error}`)
            })
    }
    
    const updateUserById = (id,name,job) => {
        updateUser(id, name,job)
            .then((response) => {
                if(response.data && response.status === 200){
                    console.log(JSON.stringify(response.data));
                }else {
                    throw new Error("Usuario no actualizado")
                }
            })
            .catch((error) => {
                console.log(`Hay un error ${error}`)
            })
    }

    
    const deleteUserById = (id) => {
        deleteUser(id)
            .then((response) => {
                if(response.status === 204){
                    console.log(`user with id ${id} has been deleted`);
                }else {
                    throw new Error("Usuario not found")
                }
            })
            .catch((error) => {
                console.log(`Hay un error ${error}`)
            })
    }

    return (<div>
        <h2>Login</h2>
        <Formik
            initialValues={initialCredentials}
            validationSchema={loginSchema}
            onSubmit={async (values) => {
                authUser(values)
            }}  
        >
            {/** obtenemos props desde Formik */}


            {({errors,touched, isSubmitting,handleBlur}) =>(
                    <Form>
                        { isSubmitting ? (<p>enviando...</p>) : 
                        (
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field id="email" name="email" type="email" className="form-control" placeholder="Introduce tu email"></Field>
                                { errors.email && touched.email && (
                                    <ErrorMessage name="email" component="div" className='alert alert-danger' />

                                    )
                                }
                                <label htmlFor="password">Password</label>
                                <Field id="password" name="password" type="password" className="form-control" placeholder="Introduce tu contraseña"></Field>
                                { errors.password && touched.password && (
                                    <ErrorMessage name="password" component="div" className='alert alert-danger' />
                                    )
                                }
                                
                                <button type="submit" className="btn btn-primary btn-lg">Login</button>
                            </div>
                        )}
                    </Form>

            )}
        </Formik>
        <div>
            <button onClick={obtainAllUsers}>All Users</button>
            <button onClick={() => obtainAllPagedUsers(2)}>All Users</button>
            <button onClick={() => obtainUserById(1)}>single Users</button>
            <button onClick={() => createNewUser('morpheus','leader')}>Create new user</button>
            <button onClick={() => updateUserById(2,'morpheus','zion resident')}>Update user</button>
            <button onClick={() => deleteUserById(2)}>Delete user</button>
        </div>
    </div>
    );
}

export default AxiosCrudExample;
