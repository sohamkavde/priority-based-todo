import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { ADD_TASK, DELETE_TASK, saveTasks, loadTasks } from './actions/taskActions';
import './App.css'; 

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(loadTasks(storedTasks));
  }, [dispatch]);

  const handleAddTask = (task) => {
    const updatedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    updatedTasks.push(task);
    dispatch(saveTasks(updatedTasks));
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: DELETE_TASK, payload: taskId });
    const updatedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const filteredTasks = updatedTasks.filter((task) => task.id !== taskId);
    dispatch(saveTasks(filteredTasks));
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">React To-Do App</h1>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
