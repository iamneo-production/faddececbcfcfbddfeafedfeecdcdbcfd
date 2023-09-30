import React, { useState } from 'react';
import '../src/App.css';
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        data-testid="task-input"
      />
      <button onClick={addTask} data-testid="add-button">
        Add
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {task.text}
            <button onClick={() => completeTask(index)} data-testid={`complete-button-${index}`}>
              Complete
            </button>
            <button onClick={() => deleteTask(index)} data-testid={`delete-button-${index}`}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
