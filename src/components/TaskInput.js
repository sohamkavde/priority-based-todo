import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      const newTask = { id: Date.now(), text: taskText, priority: taskPriority };
      // dispatch(addTask(newTask));
      onAddTask(newTask); // Notify parent component
      setTaskText('');
      setTaskPriority('Medium');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <select
        className="form-select"
        value={taskPriority}
        onChange={(e) => setTaskPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button className="btn btn-primary" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
