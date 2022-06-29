import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('No es un email válido').required('El email es obligatorio'),
        password: Yup.string().required('La contraseña es requerida')
    }
);

const LoginFormik = () => {

    /**
     * Como se inicializan los valores del form
     */
    const initialCredentials = {
        email:'',
        password:''
    }

    return (
        <div>
            <h2>Login</h2>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r)=>setTimeout(r,500));
                    alert(JSON.stringify(values,null,2));
                    // guardamos los daots en el localstorage
                    localStorage.setItem('credentials',values);
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
        </div>
    );
}

export default LoginFormik;
