import { TOGGLE_TASK_EDITOR } from '../constants/actionTypes';

export function toggleTaskEditor(taskId) {
  return {
    type: TOGGLE_TASK_EDITOR,
    taskId
  };
}
