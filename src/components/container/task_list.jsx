import React, { useState, useEffect} from 'react';
import TaskComponent from '../pure/task';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';
import TaskFormik from '../pure/forms/taskFormik';

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
        setTimeout(()=>{
            setLoading(false);
        },1000);
        return () => {
            console.log("Task list componente va a ser unmount");
        };
    }, [tasks]);

    
    function completeTask(task){
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        setTasks(tempTask);
    }

    function deleteTask(task) {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index,1);
        setTasks(tempTask);
    }

    function addTask(task) {
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }


    const Table = () => {
        return (
        
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
                            <TaskComponent key={index} task={task} complete={completeTask} deleteTask={deleteTask} addTask={addTask}/>
                        )
                    }
                    )}
                </tbody>
            </table>
        );
    }

    
    let taskTable;

    if(tasks.length > 0 ){
        taskTable = <Table></Table>
    }else {
        taskTable = (
        <div>
            <h3>No tienes tareas</h3>
            <h4>Favor de crear una nueva tarea</h4>
        </div>
        )
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
                        { loading ? (<div><p>Cargando...</p><p><i className='bi bi-arrow-repeat' style={{color:'grey', fontSize:'large'}}></i></p></div>) : taskTable }
                    </div>
                    <TaskFormik add={addTask} />
                </div>
            </div>
        </div>
    );
};


export default TaskListComponent;
