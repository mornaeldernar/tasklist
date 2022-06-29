import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, length }) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value,
        )
        add(newTask);
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        
        <div className="">
            <button type='button' className='btn btn-primary' onClick={handleShow}>{length > 0 ?  'Agragar' : 'Crea tu primera tarea' }</button>
            <form onSubmit={ addTask } className='d-flex justify-content-center align-items-center mb-4'>
                <div className='modal'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <div className='modal-title'>
                                    <h5>Crea una tarea</h5>
                                    <button type='button' className='btn-close' onClick={handleClose}></button>
                                </div>
                            </div>
                            <div className='modal-body'>
                                <div className='form-outline flex-fill'>
                                    <input id="inputName" type="text" placeholder='Titulo de la tarea' className='form-control form-control-lg' required autoFocus ref={nameRef} />
                                    <input id="inputDescription" type="text" placeholder='Descripcion de la tarea' className='form-control form-control-lg' required ref={descriptionRef} />
                                    <select id="selectPrioridad" ref={levelRef} defaultValue={LEVELS.NORMAL} className='form-select form-control-lg'>
                                        <option value={LEVELS.NORMAL}>{LEVELS.NORMAL}</option>
                                        <option value={LEVELS.URGENT}>{LEVELS.URGENT}</option>
                                        <option value={LEVELS.BLOCKING}>{LEVELS.BLOCKING}</option>
                                    </select>
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button type='submit' className='btn btn-success btn-lg ms-2'>
                                    {length > 0 ?  'Agragar' : 'Crea tu primera tarea' }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>


            
    );
}

TaskForm.protoType = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
