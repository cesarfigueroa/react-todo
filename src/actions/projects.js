import {
  ADD_PROJECT,
  ADD_TASK_TO_PROJECT,
  REMOVE_PROJECT
} from '../constants/actionTypes';

export function addProject(id, title) {
  return {
    type: ADD_PROJECT,
    id,
    title
  };
}

export function addTaskToProject(projectId, taskId) {
  return {
    type: ADD_TASK_TO_PROJECT,
    projectId,
    taskId
  };
}

export function removeProject(id) {
  return {
    type: REMOVE_PROJECT,
    id
  };
}
