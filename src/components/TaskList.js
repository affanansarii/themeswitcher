import TaskItem from "./TaskItem"

const TaskList = ({ tasks, deleteTask, startEditTask }) => {

    return (

        <ul>

            {tasks.map((task) => (

                <TaskItem key={task.id} task={task} deleteTask={deleteTask} startEditTask={startEditTask} />

            ))}

        </ul>

    )

}

export default TaskList;