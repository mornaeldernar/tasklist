import React from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username :  '',
        email : '',
        password : '',
        confirm : '', // Tiene que ser igual que el password
        role : ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6,"El usuario tiene que tener por lo menos 6 caracteres")
                .max(12, "El nombre de usuario no puede ser mayor a 12 caracteres")
                .required(),            
            email: Yup.string()
                .email('No es un email válido')
                .required('El email es obligatorio'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], "Selecciona un rol")
                .required('El rol es requerido'),
            password: Yup.string()
                .required('La contraseña es requerida')
                .min(8,'La contraseña es muy corta'),
            confirm: Yup.string()
                .when("password",{
                    is: value => ( value && value.length > 0 ? true : false ),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        "No coinciden las contraseñas!"
                    )
                }).required('Tienes que confirmar la contraseña')
        }
    )

    const submit = () => {
        console.log("Register User");
    }
    return (
        <div>
            <h4>Registrate</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r)=>setTimeout(r,500));
                    alert(JSON.stringify(values,null,2));
                }}  
            >
                {/** obtenemos props desde Formik */}


                {({ values, errors,touched, isSubmitting, handleChange, handleBlur }) =>(
                    <Form>
                        { isSubmitting ? (<p>enviando...</p>) : 
                        (
                            <div>
                                <label htmlFor="username">Username</label>
                                <Field id="username" name="username" className="form-control" placeholder="Introduce tu username"/>
                                {
                                    errors.username && touched.username && (
                                        <ErrorMessage name="username" component="div" className='alert alert-danger' />
                                    )
                                }

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

                                <label htmlFor="confirm">Confirm password</label>
                                <Field id="confirm" name="confirm" type="password" className="form-control" placeholder="Confirma tu contraseña"></Field>
                                { errors.confirm && touched.confirm && (
                                    <ErrorMessage name="confirm" component="div" className='alert alert-danger' />
                                    )
                                }

                                <button type="submit" className="btn btn-primary btn-lg">Registrate</button>
                            </div>
                        )}
                    </Form>

                )}
               
                

            </Formik>
        </div>
    );
}

export default RegisterFormik;
