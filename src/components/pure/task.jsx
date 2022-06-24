import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('Tarea Creada')
        return () => {
            console.log(`Tarea ${task.name} se va a unmount`);
        };
    }, [task]);

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
            return(<i className='bi bi-toggle-on' style={{color:'green', fontSize:'large'}}></i>);
        }else{
            return(<i className='bi bi-toggle-off' style={{color:'grey', fontSize:'large'}}></i>);
        }
    }
    
    return (
        <tr className='fw-normal'>
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
                <i className='bi-trash' style={{color:'tomato', fontSize:'large'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task : PropTypes.instanceOf(Task)
};


export default TaskComponent;
