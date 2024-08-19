import React, { useEffect, useState } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {

    const [task, setTask] = useState('');

    useEffect(() => {

        if (taskToEdit) {
            setTask(taskToEdit.text);
        }

    }, [taskToEdit]);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (taskToEdit) {
            editTask(task);
        } else {
            addTask(task);
        }

        setTask('');

    }

    return (

        <form onSubmit={handleSubmit}>

            <input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter a task' required />

            <button className='todo-list-button' type='submit'>{taskToEdit ? 'Edit task' : 'Add Task'}</button>

        </form>

    )

}

export default TaskForm;