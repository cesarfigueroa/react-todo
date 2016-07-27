import { List, Map } from 'immutable';
import {
  ADD_PROJECT,
  ADD_TASK_TO_PROJECT,
  REMOVE_TASK_FROM_PROJECT,
  REMOVE_PROJECT
} from '../constants/actionTypes';

const tasks = (state = Map(), action) => {
  switch (action.type) {
  case ADD_PROJECT:
    return state.set(action.id, Map({
      id: action.id,
      title: action.title,
      tasks: List()
    }));
  case ADD_TASK_TO_PROJECT:
    return state.updateIn([action.projectId, 'tasks'], tasks => {
      if (tasks) {
        return tasks.push(action.taskId);
      }
    });
  case REMOVE_TASK_FROM_PROJECT:
    return state.updateIn([action.projectId, 'tasks'], taskIds => {
      if (taskIds) {
        return taskIds.filterNot(id => id === action.taskId);
      }
    });
  case REMOVE_PROJECT:
    return state.remove(action.id);
  default:
    return state;
  }
};

export default tasks;
