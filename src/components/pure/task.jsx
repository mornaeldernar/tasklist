import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
// Importamos los modelos
import { LEVELS } from '../../models/levels.enum';
// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';

const TaskComponent = ({ task, complete, deleteTask }) => {

    useEffect(() => {
        console.log('Tarea Creada')
        return () => {
            console.log(`Tarea ${task.name} se va a unmount`);
        };
    }, [task]);

    const taskCompleted = {
        backgoundColor: 'tomato',
        color: 'gray',
        fontWeight: 'bold',
        textDecoration : 'line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }
    /**
     * 
     * @returns badge dependiendo del task.level
     */
    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>{task.level}</span>
                    </h6>
                );
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>{task.level}</span>
                    </h6>
                );
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>{task.level}</span>
                    </h6>
                );
            default:
                break;
        }
    }

    /**
     * 
     * @returns icono dependiendo de la task.completed
     */
    function taskIconCompleted(){
        if(task.completed){
            return(<i onClick={ () => complete(task) } className='bi bi-toggle-on task-action' style={{color:'green', fontSize:'large'}}></i>);
        }else{
            return(<i onClick={ () => complete(task) } className='bi bi-toggle-off task-action' style={{color:'grey', fontSize:'large'}}></i>);
        }
    }
    
    return (
        <tr className="fw-normal" style={task.completed ?   taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
               {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskIconCompleted()}
                <i onClick={ () => deleteTask(task) } className='bi-trash task-action' style={{color:'tomato', fontSize:'large'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task : PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};


export default TaskComponent;
