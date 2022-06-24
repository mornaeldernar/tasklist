import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add }) => {

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

    return (
        <form onSubmit={ addTask } className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input id="inputName" type="text" placeholder='Titulo de la tarea' className='form-control form-control-lg' required autoFocus ref={nameRef} />
                <input id="inputDescription" type="text" placeholder='Descripcion de la tarea' className='form-control form-control-lg' required ref={descriptionRef} />
                <label htmlFor='selectPrioridad' className='sr-only'>Prioridad:</label>
                <select id="selectPrioridad" ref={levelRef} defaultValue={LEVELS.NORMAL} className='form-select'>
                    <option value={LEVELS.NORMAL}>{LEVELS.NORMAL}</option>
                    <option value={LEVELS.URGENT}>{LEVELS.URGENT}</option>
                    <option value={LEVELS.BLOCKING}>{LEVELS.BLOCKING}</option>
                </select>
                <button type='submit' className='btn btn-primary btn-lg ms-2'>Agregar</button>
            </div>
        </form>
    );
}

TaskForm.protoType = {
    add: PropTypes.func.isRequired
}

export default TaskForm;
