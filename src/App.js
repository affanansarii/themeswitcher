// src/App.js
import React, { useContext, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText };
    setTasks([...tasks, newTask]);
  }

  const editTask = (editedText) => {

    setTasks(tasks.map((task) => task.id === taskToEdit.id ? { ...task, text: editedText } : task));
    setTaskToEdit(null);

  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const startEditTask = (task) => {
    setTaskToEdit(task);
  }

  const lightTheme = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    buttonBackground: '#6200ea',
    buttonColor: '#ffffff',
    borderColor: '#cccccc',
  };

  return (
    <div className="app" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <header className="app-header">
        <h1>Theme Switcher</h1>
        {/* <p>{theme === 'lightTheme' ? 'Dark Mode' : 'Light Mode'}</p> */}
        <button
          className="toggle-button"
          onClick={toggleTheme}
          style={{ backgroundColor: theme.buttonBackground, color: theme.buttonColor }}
        >
          Toggle Theme
        </button>
      </header>
      <main>
        <div className="content-box" style={{ borderColor: theme.borderColor }}>
          <div className='todo-list'>

            <h1>Todo List</h1>

            <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
            <TaskList tasks={tasks} deleteTask={deleteTask} startEditTask={startEditTask} />

          </div>
        </div>
      </main>
      <footer className="app-footer">
        <p>© 2024 Theme Switcher</p>
      </footer>
    </div>
  );
};

export default App;
