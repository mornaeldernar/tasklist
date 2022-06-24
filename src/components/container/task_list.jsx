import React, { useState, useEffect} from 'react';
import TaskComponent from '../pure/task';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import '../../styles/task.scss';

const TaskListComponent = () => {

    const defaultTask1 = new Task( "Ejemplo 1", "Descripcion 1", true, LEVELS.NORMAL);
    const defaultTask2 = new Task( "Ejemplo 2", "Descripcion 2", false, LEVELS.URGENT);
    const defaultTask3 = new Task( "Ejemplo 3", "Descripcion 3", false, LEVELS.BLOCKING);

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log("Modificacion de tareas");
        setLoading(false);
        return () => {
            console.log("Taski list componente va a ser unmount");
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log("TODO: Cambia el estado de una tarea");
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Tus tareas:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ { position:'relative', height:'400px' } }>
                        <table className='table'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th scope='col'>Titulo</th>
                                    <th scope='col'>Descripción</th>
                                    <th scope='col'>Prioridad</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map( (task,index) => {
                                    return (
                                        <TaskComponent key={index} task={task}/>
                                    )
                                }
                                )}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};


export default TaskListComponent;
