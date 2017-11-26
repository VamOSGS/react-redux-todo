import {
  TEST,
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SAVE_TASK,
} from '../constants';

export const test = () => ({
  type: TEST,
});

export const addTask = data => ({
  type: ADD_TASK,
  task: data,
});

export const deleteTask = data => ({
  type: DELETE_TASK,
  id: data,
});

export const editTask = data => ({
  type: EDIT_TASK,
  id: data,
});

export const saveTask = data => ({
  type: SAVE_TASK,
  payload: data,
});

export const toggleTask = data => ({
  type: TOGGLE_TASK,
  id: data,
});
