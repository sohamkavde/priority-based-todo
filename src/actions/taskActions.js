export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SAVE_TASKS = 'SAVE_TASKS';
export const LOAD_TASKS = 'LOAD_TASKS';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const saveTasks = (tasks) => ({
  type: SAVE_TASKS,
  payload: tasks,
});

export const loadTasks = (tasks) => ({
  type: LOAD_TASKS,
  payload: tasks,
});
