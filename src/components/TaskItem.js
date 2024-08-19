const TaskItem = ({ task, deleteTask, startEditTask }) => {

    return (

        <li>

            <span>{task.text}</span>

            <button className="todo-list-button" onClick={() => startEditTask(task)}>Edit</button>
            <button className="todo-list-button" onClick={() => deleteTask(task.id)}>Delete</button>

        </li>

    )

}

export default TaskItem;