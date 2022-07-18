import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const TodoForm = ({ submit }) => {

    const createTodo = (e) => {
        e.preventDefault()
        submit(newText.current.value);
        newText.current.value = '';
    }

    const newText = useRef();

    return (
        <div>
            <h2>Create your TODOs</h2>
            <form onSubmit={createTodo}>
                <input type='text' ref={newText}/>
                <button type='submit'>
                    Create Todo
                </button>
            </form>
        </div>
    );
}

TodoForm.propTypes = {
    submit : PropTypes.func.isRequired
}

export default TodoForm;
