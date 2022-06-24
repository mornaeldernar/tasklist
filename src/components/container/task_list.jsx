import React, { useState, useEffect} from 'react';
import TaskComponent from '../pure/task';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import '../../styles/task.scss';

const TaskListComponent = () => {

    const defaultTask = new Task( "Ejemplo", "Descripcion default", false, LEVELS.NORMAL);

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
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
            <h1>
                Tus tareas
            </h1>
            {/* TODO: aplicar un for para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask}/>
        </div>
    );
};


export default TaskListComponent;
