// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
          {task.text}
          <span className={`badge bg-${getBadgeColor(task.priority)}`}>{task.priority}</span>
          <button className="btn btn-danger" onClick={() => onDeleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getBadgeColor = (priority) => {
  switch (priority) {
    case 'High':
      return 'danger';
    case 'Medium':
      return 'warning';
    case 'Low':
      return 'success';
    default:
      return 'secondary';
  }
};

export default TaskList;
