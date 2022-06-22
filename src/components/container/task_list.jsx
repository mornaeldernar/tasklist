import React from 'react';
import TaskComponent from '../pure/task';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';


const TaskListComponent = () => {
    const defaultTask = new Task( "Ejemplo", "Descripcion default", false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log("TODO: Cambia el estado de una tarea");
    }

    return (
        <div>
            <div>
                Tus tareas
            </div>
            {/* TODO: aplicar un for para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask}/>
        </div>
    );
};


export default TaskListComponent;
