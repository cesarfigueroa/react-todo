import {
  ADD_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  DELETE_TASK
} from '../constants/actionTypes';

export function addTask(id, title) {
  return {
    type: ADD_TASK,
    id: id,
    title: title
  };
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    id: id
  };
}

export function editTask(id, title) {
  return {
    type: EDIT_TASK,
    id: id,
    title: title
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id: id
  };
}
