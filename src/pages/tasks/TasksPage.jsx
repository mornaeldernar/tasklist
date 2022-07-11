import React from 'react';
import { Link } from 'react-router-dom';
import TaskListComponent from '../../components/container/task_list';

const TasksPage = () => {
    return (
        <div>
            <TaskListComponent />
            <Link to="/logout">Logout</Link>

        </div>
    );
}

export default TasksPage;
