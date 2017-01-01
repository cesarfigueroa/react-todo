import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  UPDATE_TASK
} from '../constants/actionTypes';

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

export function updateTask(id, newTitle) {
  return {
    type: UPDATE_TASK,
    id,
    title: newTitle
  };
}
