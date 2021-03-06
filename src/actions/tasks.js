import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from '../constants/actionTypes';

export function addTask(id, title) {
  return {
    type: ADD_TASK,
    id,
    title
  };
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    id
  };
}

export function removeTask(id) {
  return {
    type: REMOVE_TASK,
    id
  };
}
