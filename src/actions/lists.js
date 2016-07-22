import { ADD_LIST, ADD_TASK_TO_LIST } from '../constants/actionTypes';

export function addList(id, title) {
  return {
    type: ADD_LIST,
    id,
    title
  };
}

export function addTaskToList(listId, taskId) {
  return {
    type: ADD_TASK_TO_LIST,
    listId,
    taskId
  };
}
