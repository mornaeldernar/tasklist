import React from 'react';
import { LEVELS } from '../../../models/levels.enum';
import * as Yup from 'yup';
import { Task } from '../../../models/task.class';
import { ErrorMessage, Field, Form, Formik } from 'formik';



const TaskFormik = ({add}) => {
    let task = new Task();


    const initialValues = {
        name : '',
        description : '',
        completed : false,
        level : LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape({
        name : Yup.string()
            .required('El nombre de la tarea es requerido')
            .min(5,'La longitud tiene que ser de al menos 5 letras'),
        description : Yup.string()
            .required("La descripcion es requerida"),
        completed : Yup.bool().required(""),
        level : Yup.string()
            .oneOf([LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT],"Favor de seleccionar una opción válida")
            .required("El nivel es requerido")
    
    });

    function addTask(values){
       add(values)
    }

    return (
        <div>
            <h4>Nueva Tarea</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                onSubmit={async (values) => {
                    await new Promise((r)=>setTimeout(r,500));
                    addTask(values)
                }} >
                
                {({ values, errors,touched, isSubmitting, handleChange, handleBlur }) =>(
                    <Form>
                        { isSubmitting ? (<p>enviando...</p>) : 
                        (
                            <div>
                                <Field id="name" name="name" className="form-control" placeholder="Titulo de la tarea"/>
                                {
                                    errors.name && touched.name && (
                                        <ErrorMessage name="name" component="div" className='alert alert-danger' />
                                    )
                                }

                                <Field id="description" name="description"  className="form-control" placeholder="Descripcion de la tarea"></Field>
                                { errors.description && touched.description && (
                                    <ErrorMessage name="description" component="div" className='alert alert-danger' />

                                    )
                                }

                                <Field id="level" as="select" name="level" className="form-select  form-control-lg" placeholder="Introduce tu contraseña">
                                    <option value={LEVELS.NORMAL}>{LEVELS.NORMAL}</option>
                                    <option value={LEVELS.URGENT}>{LEVELS.URGENT}</option>
                                    <option value={LEVELS.BLOCKING}>{LEVELS.BLOCKING}</option>
                                </Field>
                                { errors.level && touched.level && (
                                    <ErrorMessage name="level" component="div" className='alert alert-danger' />
                                    )
                                }
                                <button type="submit" className="btn btn-primary btn-lg">Agregar</button>
                            </div>
                        )}
                    </Form>

                )}
               
            </Formik>
        </div>
    );
}

export default TaskFormik;
