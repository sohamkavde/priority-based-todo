// src/reducers/taskReducer.js
import { ADD_TASK, DELETE_TASK, SAVE_TASKS, LOAD_TASKS } from '../actions/taskActions';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const updatedTasksAdd = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd));
      return {
        ...state,
        tasks: updatedTasksAdd,
      };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
      };
    case SAVE_TASKS:
      localStorage.setItem('tasks', JSON.stringify(action.payload));
      return {
        ...state,
        tasks: action.payload,
      };
    case LOAD_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
