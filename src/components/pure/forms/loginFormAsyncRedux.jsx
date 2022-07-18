import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('No es un email válido').required('El email es obligatorio'),
        password: Yup.string().required('La contraseña es requerida')
    }
);

const LoginFormAsyncRedux = ({logged, fetching, onLogin}) => {
    /**
     * Como se inicializan los valores del form
     */
    const initialCredentials = {
        email:'',
        password:''
    }


    return (
        <Formik
                // *** Initial values that the form will take
                initialValues = { initialCredentials }
                // *** Yup Validation Schema ***
                validationSchema = {loginSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    onLogin(values.email, values.password)
                }}
        >
                {/* We obtain props from Formik */}
                
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" className="form-control" placeholder="example@email.com" />

                            {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div' className='alert alert-danger'></ErrorMessage>
                                )
                            }

                            <label htmlFor="password" >Password</label>
                            <Field

                                id="password"
                                name="password"
                                placeholder="password"
                                type='password'
                                className="form-control"
                            />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div' className='alert alert-danger'></ErrorMessage>
                                )
                            }
                            <button type="submit" className='btn btn-primary'>Login</button>
                            { fetching ? (<p>LOADING...</p>) : null}
                            { isSubmitting ? (<p>Login your credentials...</p>): null }
                        </Form>
                )}
            </Formik>

    );
};


LoginFormAsyncRedux.propTypes = {
    logged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};


export default LoginFormAsyncRedux;
