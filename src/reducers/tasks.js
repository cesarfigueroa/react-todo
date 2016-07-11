import {
  ADD_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  DELETE_TASK
} from '../constants/actionTypes';

const tasks = (state = [], action) => {
  switch (action.type) {
  case ADD_TASK:
    return [...state, {
      id: action.id,
      title: action.title,
      isComplete: false
    }];
  case TOGGLE_TASK:
    return state.map(task => {
      if (task.id === action.id) {
        return Object.assign({}, task, { isComplete: !task.isComplete });
      } else {
        return task;
      }
    });
  // TODO: Compose down even further. Too similar to TOGGLE_TASK
  case EDIT_TASK:
    return state.map(task => {
      if (task.id === action.id) {
        return Object.assign({}, task, { title: action.title });
      } else {
        return task;
      }
    });
  case DELETE_TASK:
    return state.filter(task => {
      return task.id !== action.id;
    });
  default:
    return state;
  }
};

export default tasks;
